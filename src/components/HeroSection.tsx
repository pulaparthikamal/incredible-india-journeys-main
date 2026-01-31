import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Calendar, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/hero-india.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("region", destination);
    if (duration) params.set("duration", duration);
    if (budget) params.set("price", budget);
    navigate(`/packages?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Incredible India"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm text-accent border border-accent/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium">India's #1 Travel Partner</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Discover{" "}
            <span className="text-accent">Incredible India</span>
            <br />
            With Us
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl"
          >
            From the snow-capped Himalayas to the sun-kissed beaches of Goa,
            explore the diverse beauty of India with our curated tour packages.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card/95 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-elevated"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  Destination
                </label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="North">North India</SelectItem>
                    <SelectItem value="South">South India</SelectItem>
                    <SelectItem value="East">East India</SelectItem>
                    <SelectItem value="West">West India</SelectItem>
                    <SelectItem value="Central">Central India</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Calendar className="h-4 w-4 text-accent" />
                  Duration
                </label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select days" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="3-5">3-5 Days</SelectItem>
                    <SelectItem value="6-8">6-8 Days</SelectItem>
                    <SelectItem value="9-12">9-12 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Wallet className="h-4 w-4 text-accent" />
                  Budget
                </label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="under30k">Under ₹30,000</SelectItem>
                    <SelectItem value="30k-50k">₹30,000 - ₹50,000</SelectItem>
                    <SelectItem value="above50k">Above ₹50,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  className="w-full btn-hero flex items-center gap-2"
                >
                  <Search className="h-5 w-5" />
                  Search Tours
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            <div>
              <span className="block text-3xl font-bold text-primary-foreground">500+</span>
              <span className="text-primary-foreground/70 text-sm">Happy Travelers</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-primary-foreground">50+</span>
              <span className="text-primary-foreground/70 text-sm">Destinations</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-primary-foreground">4.9</span>
              <span className="text-primary-foreground/70 text-sm">Average Rating</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
