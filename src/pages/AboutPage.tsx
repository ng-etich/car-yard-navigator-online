import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Clock, 
  MapPin,
  Shield,
  Star,
  Heart,
  CheckCircle
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Clock },
    { number: "10,000+", label: "Happy Customers", icon: Users },
    { number: "500+", label: "Vehicles Sold Monthly", icon: Award },
    { number: "98%", label: "Customer Satisfaction", icon: Star }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest, transparent dealings with every customer interaction."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to the highest standards in products and services."
    },
    {
      icon: Heart,
      title: "Customer-First",
      description: "Your satisfaction and trust are our top priorities."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Embracing technology to enhance your automotive experience."
    }
  ];

  const team = [
    {
      name: "Michael Rodriguez",
      role: "General Manager",
      experience: "20+ years",
      specialties: ["Luxury Vehicles", "Customer Relations", "Team Leadership"]
    },
    {
      name: "Sarah Chen",
      role: "Sales Director",
      experience: "15+ years",
      specialties: ["Premium Brands", "Financing Solutions", "Client Advisory"]
    },
    {
      name: "David Thompson",
      role: "Service Manager",
      experience: "18+ years",
      specialties: ["Technical Expertise", "Quality Assurance", "Customer Care"]
    }
  ];

  const milestones = [
    { year: "2008", event: "AutoPremium founded with vision for excellence" },
    { year: "2012", event: "Expanded to luxury vehicle specialization" },
    { year: "2016", event: "Opened state-of-the-art service center" },
    { year: "2020", event: "Launched digital customer experience platform" },
    { year: "2023", event: "Achieved industry-leading customer satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About AutoPremium
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Fifteen years of automotive excellence, delivering premium vehicles and exceptional service to discerning customers
          </p>
          <div className="flex justify-center">
            <Badge className="bg-accent text-accent-foreground px-6 py-2 text-lg">
              Trusted Since 2008
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="text-center p-6 hover:shadow-automotive transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At AutoPremium, we believe that purchasing a vehicle should be an exceptional experience from start to finish. Our mission is to redefine automotive retail by combining premium inventory, transparent pricing, and personalized service that exceeds expectations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just selling cars – we're building lasting relationships with customers who appreciate quality, integrity, and automotive excellence.
            </p>
            <div className="space-y-3">
              {[
                "Curated premium vehicle selection",
                "Transparent, competitive pricing",
                "Exceptional customer service",
                "Professional expertise and guidance"
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-automotive rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose AutoPremium?</h3>
            <div className="space-y-4">
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Premium Selection</h4>
                <p className="text-sm text-muted-foreground">Hand-picked vehicles that meet our rigorous quality standards</p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Expert Guidance</h4>
                <p className="text-sm text-muted-foreground">Knowledgeable team to help you find the perfect vehicle</p>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Comprehensive Service</h4>
                <p className="text-sm text-muted-foreground">From financing to maintenance, we support you throughout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every interaction and decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center p-6 hover:shadow-card-hover transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our commitment to automotive excellence
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="flex items-center animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full relative">
                  <div className="absolute w-0.5 h-16 bg-border left-1/2 transform -translate-x-1/2 top-4"></div>
                </div>
                <div className="ml-8 flex-1">
                  <p className="text-lg text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your automotive success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="p-6 hover:shadow-automotive transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center mb-2">{member.name}</h3>
                  <p className="text-primary text-center font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground text-center mb-4">{member.experience}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs mr-1">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Experience the AutoPremium Difference</h3>
          <p className="text-xl mb-6 text-gray-200 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made AutoPremium their trusted automotive partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/inventory">Browse Our Inventory</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;