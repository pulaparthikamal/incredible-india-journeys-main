import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { tourPackages } from "@/data/packages";
import PackageCard from "./PackageCard";
import { Button } from "@/components/ui/button";

const FeaturedPackages = () => {
  const featuredPackages = tourPackages.filter((pkg) => pkg.isPopular).slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Featured Tours
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Most Popular{" "}
            <span className="text-accent">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked collection of the most sought-after tour packages,
            loved by travelers across India and beyond.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/packages">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
            >
              View All Packages
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
