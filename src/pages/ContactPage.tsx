import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Car,
  Calendar,
  CreditCard,
  Send
} from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "",
    timeframe: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredContact: "",
      timeframe: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtext: "Mon-Sat: 8AM-8PM, Sun: 10AM-6PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@autopremium.com",
      subtext: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "1234 Premium Drive, Auto City, AC 12345",
      subtext: "Easy highway access and parking"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 8AM-8PM",
      subtext: "Sunday: 10AM-6PM"
    }
  ];

  const services = [
    {
      icon: Car,
      title: "Vehicle Sales",
      description: "Browse our premium inventory and schedule test drives"
    },
    {
      icon: CreditCard,
      title: "Financing",
      description: "Get pre-approved and explore financing options"
    },
    {
      icon: Calendar,
      title: "Service Appointment",
      description: "Schedule maintenance or repairs with our certified technicians"
    },
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our services, policies, or anything else"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Ready to find your next vehicle or have questions? Our expert team is here to help you every step of the way.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Contact Info */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={info.title}
              className="text-center p-6 hover:shadow-automotive transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="shadow-automotive">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferred-contact">Preferred Contact Method</Label>
                      <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange("preferredContact", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="either">Either is fine</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vehicle-inquiry">Vehicle Inquiry</SelectItem>
                          <SelectItem value="test-drive">Schedule Test Drive</SelectItem>
                          <SelectItem value="financing">Financing Questions</SelectItem>
                          <SelectItem value="trade-in">Trade-in Valuation</SelectItem>
                          <SelectItem value="service">Service Appointment</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeframe">Purchase Timeframe</Label>
                      <Select value={formData.timeframe} onValueChange={(value) => handleInputChange("timeframe", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When are you looking to buy?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="within-month">Within a month</SelectItem>
                          <SelectItem value="within-3-months">Within 3 months</SelectItem>
                          <SelectItem value="just-browsing">Just browsing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about what you're looking for..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Services & Map */}
          <div className="space-y-8">
            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">How Can We Help?</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card 
                    key={service.title}
                    className="p-4 hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                          <service.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Visit Our Showroom</CardTitle>
                <CardDescription>
                  Located in the heart of Auto City with easy access and ample parking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-automotive rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">1234 Premium Drive</p>
                    <p className="text-muted-foreground">Auto City, AC 12345</p>
                    <Button variant="outline" className="mt-4">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-hero text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-200 mb-4">
                  For urgent matters or after-hours support, call our emergency line
                </p>
                <Button variant="hero" asChild>
                  <a href="tel:+15551234567">
                    <Phone className="h-4 w-4" />
                    Call (555) 123-4567
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;