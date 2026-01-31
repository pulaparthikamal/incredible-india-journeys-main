import { Link } from "react-router-dom";
import { Clock, Users, MapPin, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import { TourPackage } from "@/data/packages";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  pkg: TourPackage;
  index?: number;
}

const PackageCard = ({ pkg, index = 0 }: PackageCardProps) => {
  const seatPercentage = (pkg.availableSeats / pkg.totalSeats) * 100;
  
  const getSeatStatus = () => {
    if (seatPercentage > 50) return { label: "Available", class: "bg-success text-accent-foreground" };
    if (seatPercentage > 20) return { label: "Limited", class: "bg-warning text-accent-foreground" };
    return { label: "Almost Full", class: "bg-destructive text-destructive-foreground" };
  };

  const seatStatus = getSeatStatus();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-travel group"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Badges */}
        {pkg.isPopular && (
          <span className="badge-popular">⭐ Popular</span>
        )}
        
        <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${seatStatus.class}`}>
          {seatStatus.label}
        </div>

        {/* Region Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-primary-foreground text-sm">
          <MapPin className="h-4 w-4" />
          <span>{pkg.region} India</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-serif text-xl font-semibold text-card-foreground line-clamp-1">
            {pkg.name}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-1">
            {pkg.destination}
          </p>
        </div>

        {/* Details Row */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{pkg.duration.days}D / {pkg.duration.nights}N</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{pkg.availableSeats}/{pkg.totalSeats} seats</span>
          </div>
        </div>

        {/* Seat Progress */}
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              seatPercentage > 50
                ? "bg-success"
                : seatPercentage > 20
                ? "bg-warning"
                : "bg-destructive"
            }`}
            style={{ width: `${seatPercentage}%` }}
          />
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-xs text-muted-foreground">Starting from</span>
            <div className="flex items-center text-accent font-bold text-xl">
              <IndianRupee className="h-5 w-5" />
              {pkg.price.standard.toLocaleString("en-IN")}
            </div>
          </div>
          <Link to={`/packages/${pkg.id}`}>
            <Button variant="default" className="bg-primary hover:bg-ocean-dark">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
