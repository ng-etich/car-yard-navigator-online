import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CreditCard, 
  Wrench, 
  ArrowUpDown, 
  Shield, 
  Calculator,
  Award 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Financing Solutions",
      description: "Competitive rates and flexible terms tailored to your budget and credit profile.",
      features: ["Low Interest Rates", "Quick Approval", "Flexible Terms"]
    },
    {
      icon: ArrowUpDown,
      title: "Trade-In Program",
      description: "Get the best value for your current vehicle with our fair trade-in evaluations.",
      features: ["Fair Market Value", "Instant Quotes", "Easy Process"]
    },
    {
      icon: Wrench,
      title: "Service & Maintenance",
      description: "Professional maintenance services to keep your vehicle running at peak performance.",
      features: ["Certified Technicians", "Genuine Parts", "Warranty Coverage"]
    },
    {
      icon: Shield,
      title: "Extended Warranties",
      description: "Comprehensive protection plans to give you peace of mind on the road.",
      features: ["Full Coverage", "Roadside Assistance", "Nationwide Service"]
    },
    {
      icon: Calculator,
      title: "Payment Calculator",
      description: "Calculate your monthly payments with our easy-to-use financing calculator.",
      features: ["Real-time Calculations", "Multiple Options", "Transparent Pricing"]
    },
    {
      icon: Award,
      title: "Certified Pre-Owned",
      description: "Rigorous inspection process ensures quality and reliability for pre-owned vehicles.",
      features: ["Multi-Point Inspection", "Vehicle History", "Quality Guarantee"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive automotive services designed to make your car buying journey seamless and enjoyable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary" asChild>
                  <Link to="/services">
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 text-gray-200">
              Contact our expert team today for personalized assistance with your automotive needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;