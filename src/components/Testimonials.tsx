import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Our Kashmir trip with TriSea Adventures was absolutely magical! The houseboat experience and the stunning views of Dal Lake will stay with us forever. The team was incredibly professional and caring.",
    tour: "Kashmir Paradise Tour",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    text: "The Kerala backwaters tour exceeded all expectations. The houseboat stay was luxurious, and the itinerary was perfectly planned. Truly God's Own Country experience!",
    tour: "Kerala Backwater Bliss",
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Delhi",
    rating: 5,
    text: "Rajasthan tour was like stepping into a royal era. The heritage hotels, the desert safari, and the warmth of the people made it an unforgettable journey. Highly recommended!",
    tour: "Royal Rajasthan Explorer",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Kolkata",
    rating: 5,
    text: "The Golden Triangle tour was perfectly organized. From the Taj Mahal at sunrise to the colorful streets of Jaipur, every moment was picture-perfect. Thank you TriSea Adventures!",
    tour: "Golden Triangle Adventure",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-accent text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Travelers{" "}
            <span className="text-accent">Say</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Real stories from real travelers who explored India with us
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-80 md:h-64">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 h-full flex flex-col justify-center">
                  <Quote className="h-10 w-10 text-accent mb-4" />
                  <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                    "{testimonials[current].text}"
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-primary-foreground">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-sm text-primary-foreground/60">
                        {testimonials[current].location} • {testimonials[current].tour}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-accent w-6"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
