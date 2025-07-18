import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CreditCard, 
  Wrench, 
  ArrowUpDown, 
  Shield, 
  Calculator,
  Award,
  CheckCircle,
  Clock,
  Star,
  Phone
} from "lucide-react";
import serviceImage from "@/assets/service-center.jpg";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: CreditCard,
      title: "Auto Financing",
      description: "Competitive financing options with flexible terms to fit your budget.",
      features: [
        "Interest rates starting at 2.9% APR",
        "Terms up to 84 months",
        "Quick pre-approval process",
        "Multiple lender options",
        "Bad credit financing available"
      ],
      pricing: "Free consultation",
      popular: true
    },
    {
      icon: ArrowUpDown,
      title: "Vehicle Trade-In",
      description: "Get maximum value for your current vehicle with our fair appraisal process.",
      features: [
        "Free vehicle appraisal",
        "Market-competitive offers",
        "Instant online quotes",
        "Trade-in tax benefits",
        "Same-day processing"
      ],
      pricing: "No hidden fees"
    },
    {
      icon: Wrench,
      title: "Service & Maintenance",
      description: "Complete automotive service by certified technicians using genuine parts.",
      features: [
        "Certified ASE technicians",
        "Manufacturer warranty compliant",
        "Genuine OEM parts",
        "Digital service records",
        "Loaner vehicles available"
      ],
      pricing: "Starting at $89"
    },
    {
      icon: Shield,
      title: "Extended Warranties",
      description: "Comprehensive protection plans for peace of mind on every drive.",
      features: [
        "Powertrain coverage up to 100K miles",
        "24/7 roadside assistance",
        "Rental car reimbursement",
        "Nationwide service network",
        "Transferable warranties"
      ],
      pricing: "Plans from $199/year"
    },
    {
      icon: Award,
      title: "Certified Pre-Owned",
      description: "Rigorous inspection and certification process for quality assurance.",
      features: [
        "160-point inspection process",
        "Vehicle history verification",
        "Reconditioning standards",
        "Limited warranty included",
        "7-day return policy"
      ],
      pricing: "Included with CPO vehicles"
    },
    {
      icon: Calculator,
      title: "Payment Calculator",
      description: "Advanced tools to help you understand your financing options.",
      features: [
        "Real-time payment calculations",
        "Multiple scenario modeling",
        "Trade-in value estimates",
        "Tax and fee calculations",
        "Personalized recommendations"
      ],
      pricing: "Free online tool"
    }
  ];

  const additionalServices = [
    "Vehicle delivery service",
    "Insurance assistance",
    "Registration and title services",
    "Vehicle detailing",
    "Collision repair coordination",
    "Fleet sales programs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-hero text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceImage})` }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Automotive Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Comprehensive solutions for all your automotive needs, from financing to maintenance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Service</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional automotive services designed to exceed your expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={service.title}
                className={`group hover:shadow-automotive transition-all duration-300 hover:-translate-y-2 bg-gradient-card relative ${
                  service.popular ? 'ring-2 ring-accent' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
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
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-border/50 pt-4 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Starting at:</span>
                      <span className="font-semibold text-primary">{service.pricing}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant={service.popular ? "premium" : "outline"} 
                    className="w-full" 
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              We also offer these complementary services to enhance your experience
            </p>
          </div>

          <div className="bg-gradient-automotive rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service) => (
                <div key={service} className="flex items-center">
                  <Star className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and customer-focused approach
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your needs with our experts" },
              { step: "02", title: "Assessment", desc: "Comprehensive evaluation and recommendation" },
              { step: "03", title: "Service", desc: "Professional execution by certified teams" },
              { step: "04", title: "Follow-up", desc: "Ongoing support and satisfaction guarantee" }
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Premium Service?</h3>
          <p className="text-xl mb-6 text-gray-200 max-w-2xl mx-auto">
            Contact our service team today to schedule your appointment or learn more about our offerings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                <Phone className="h-5 w-5" />
                Call (555) 123-4567
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Schedule Online</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;