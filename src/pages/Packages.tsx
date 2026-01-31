import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { tourPackages, filterPackages } from "@/data/packages";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Packages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [region, setRegion] = useState(searchParams.get("region") || "All");
  const [duration, setDuration] = useState(searchParams.get("duration") || "All");
  const [priceRange, setPriceRange] = useState(searchParams.get("price") || "All");
  const [filteredPackages, setFilteredPackages] = useState(tourPackages);

  useEffect(() => {
    const filtered = filterPackages(region, duration, priceRange);
    setFilteredPackages(filtered);
  }, [region, duration, priceRange]);

  const clearFilters = () => {
    setRegion("All");
    setDuration("All");
    setPriceRange("All");
    setSearchParams({});
  };

  const hasActiveFilters = region !== "All" || duration !== "All" || priceRange !== "All";

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Region Filter */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Region</label>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Regions" />
          </SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="All">All Regions</SelectItem>
            <SelectItem value="North">North India</SelectItem>
            <SelectItem value="South">South India</SelectItem>
            <SelectItem value="East">East India</SelectItem>
            <SelectItem value="West">West India</SelectItem>
            <SelectItem value="Central">Central India</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Duration Filter */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Duration</label>
        <Select value={duration} onValueChange={setDuration}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Durations" />
          </SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="All">All Durations</SelectItem>
            <SelectItem value="3-5">3-5 Days</SelectItem>
            <SelectItem value="6-8">6-8 Days</SelectItem>
            <SelectItem value="9-12">9-12 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Filter */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Price Range</label>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Prices" />
          </SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="All">All Prices</SelectItem>
            <SelectItem value="under30k">Under ₹30,000</SelectItem>
            <SelectItem value="30k-50k">₹30,000 - ₹50,000</SelectItem>
            <SelectItem value="above50k">Above ₹50,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore <span className="text-accent">Tour Packages</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover curated travel experiences across India. From the Himalayas to the
              backwaters, find your perfect adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-32 bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    Filters
                  </h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-accent hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <FilterContent />
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <p className="text-muted-foreground">
                {filteredPackages.length} packages found
              </p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                    {hasActiveFilters && (
                      <span className="ml-2 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                        !
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Packages Grid */}
            <div className="flex-1">
              <div className="hidden lg:flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredPackages.length} packages
                </p>
              </div>

              {filteredPackages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredPackages.map((pkg, index) => (
                    <PackageCard key={pkg.id} pkg={pkg} index={index} />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Filter className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    No packages found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters to find more options
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
