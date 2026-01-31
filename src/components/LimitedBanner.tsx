import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const LimitedBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set countdown to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-6 bg-gradient-to-r from-accent via-saffron-light to-accent overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center animate-pulse-glow">
              <Clock className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="text-accent-foreground">
              <p className="font-semibold">🔥 Limited Seats Available!</p>
              <p className="text-sm text-accent-foreground/80">Book now & get up to 20% off on select packages</p>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-accent-foreground/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[50px]">
                    <span className="text-xl font-bold text-accent-foreground">
                      {String(value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs text-accent-foreground/70 uppercase">{unit}</span>
                </div>
              ))}
            </div>

            <Link to="/packages">
              <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 group">
                Grab Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LimitedBanner;
