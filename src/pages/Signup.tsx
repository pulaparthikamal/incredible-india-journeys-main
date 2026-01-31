import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    const success = signup(name, email, password);
    if (!success) setError("User already exists");
    else navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 p-6 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          placeholder="Name"
          className="w-full border p-2 mb-3"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          className="w-full border p-2 mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
