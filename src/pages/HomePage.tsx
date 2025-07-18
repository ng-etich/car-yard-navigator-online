import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedVehicles />
      <Services />
    </div>
  );
};

export default HomePage;