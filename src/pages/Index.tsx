import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedPackages from "@/components/FeaturedPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import LimitedBanner from "@/components/LimitedBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <LimitedBanner />
        <FeaturedPackages />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
