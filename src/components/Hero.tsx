import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Star } from "lucide-react";
import heroImage from "@/assets/hero-showroom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(22, 39, 77, 0.7), rgba(22, 39, 77, 0.5)), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">Premium Automotive Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your
            <span className="block text-accent">Dream Car</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover premium vehicles with unmatched quality, competitive pricing, 
            and exceptional service that exceeds expectations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="premium" size="lg" asChild className="text-lg px-8">
              <Link to="/inventory">
                <Search className="h-5 w-5" />
                Browse Inventory
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild className="text-lg px-8">
              <Link to="/services">
                Get Financing
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Vehicles Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;