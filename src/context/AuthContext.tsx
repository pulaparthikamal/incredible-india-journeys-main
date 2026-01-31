import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const signup = (name: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find((u: any) => u.email === email);
    if (exists) return false;

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    const loggedUser = { name, email };
    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);
    return true;
  };

  const login = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!found) return false;

    const loggedUser = { name: found.name, email };
    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
