import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Calendar, Fuel, Users, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import featuredCarsImage from "@/assets/featured-cars.jpg";

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const vehicles = [
    {
      id: 1,
      name: "BMW M4 Competition",
      make: "BMW",
      price: 89900,
      year: 2023,
      fuel: "Premium",
      seats: 4,
      image: featuredCarsImage,
      mileage: "12,500 miles",
      type: "Sports Coupe",
      features: ["Leather Interior", "Navigation", "Premium Sound"],
      isNew: true
    },
    {
      id: 2,
      name: "Mercedes-Benz GLE 350",
      make: "Mercedes-Benz",
      price: 67500,
      year: 2022,
      fuel: "Premium",
      seats: 7,
      image: featuredCarsImage,
      mileage: "28,000 miles",
      type: "Luxury SUV",
      features: ["AWD", "Panoramic Roof", "Heated Seats"],
      isNew: false
    },
    {
      id: 3,
      name: "Audi A8 L Quattro",
      make: "Audi",
      price: 95200,
      year: 2023,
      fuel: "Premium",
      seats: 5,
      image: featuredCarsImage,
      mileage: "8,200 miles",
      type: "Executive Sedan",
      features: ["Quattro AWD", "Massage Seats", "Night Vision"],
      isNew: true
    },
    {
      id: 4,
      name: "Tesla Model S Plaid",
      make: "Tesla",
      price: 112000,
      year: 2023,
      fuel: "Electric",
      seats: 5,
      image: featuredCarsImage,
      mileage: "5,100 miles",
      type: "Electric Sedan",
      features: ["Autopilot", "Supercharging", "Premium Interior"],
      isNew: true
    },
    {
      id: 5,
      name: "Porsche 911 Turbo S",
      make: "Porsche",
      price: 207000,
      year: 2023,
      fuel: "Premium",
      seats: 4,
      image: featuredCarsImage,
      mileage: "3,800 miles",
      type: "Sports Car",
      features: ["Sport Chrono", "Carbon Fiber", "PASM"],
      isNew: true
    },
    {
      id: 6,
      name: "Range Rover Sport",
      make: "Land Rover",
      price: 89500,
      year: 2022,
      fuel: "Premium",
      seats: 7,
      image: featuredCarsImage,
      mileage: "22,000 miles",
      type: "Luxury SUV",
      features: ["Terrain Response", "Air Suspension", "Meridian Audio"],
      isNew: false
    }
  ];

  const makes = ["BMW", "Mercedes-Benz", "Audi", "Tesla", "Porsche", "Land Rover"];
  const types = ["Sports Coupe", "Luxury SUV", "Executive Sedan", "Electric Sedan", "Sports Car"];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.make.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMake = !selectedMake || vehicle.make === selectedMake;
    const matchesType = !selectedType || vehicle.type === selectedType;
    
    return matchesSearch && matchesMake && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <div className="bg-gradient-automotive py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vehicle Inventory
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of carefully selected vehicles
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-card rounded-lg border border-border p-6 mb-8 shadow-card-hover">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedMake} onValueChange={setSelectedMake}>
              <SelectTrigger>
                <SelectValue placeholder="All Makes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Makes</SelectItem>
                {makes.map(make => (
                  <SelectItem key={make} value={make}>{make}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                {types.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="premium" className="w-full">
              <Filter className="h-4 w-4" />
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredVehicles.length} of {vehicles.length} vehicles
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Price: Low to High</Button>
            <Button variant="outline" size="sm">Year: Newest First</Button>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group hover:shadow-automotive transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
              <CardContent className="p-0">
                {/* Vehicle Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {vehicle.isNew && (
                      <Badge className="bg-accent text-accent-foreground">New</Badge>
                    )}
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {vehicle.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="icon" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Vehicle Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{vehicle.name}</h3>
                      <p className="text-muted-foreground">{vehicle.mileage}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        ${vehicle.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-b border-border/50">
                    <div className="text-center">
                      <Calendar className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                      <div className="text-sm font-medium">{vehicle.year}</div>
                    </div>
                    <div className="text-center">
                      <Fuel className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                      <div className="text-sm font-medium">{vehicle.fuel}</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                      <div className="text-sm font-medium">{vehicle.seats}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={`/vehicle/${vehicle.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="automotive" className="flex-1" asChild>
                      <Link to="/contact">
                        Test Drive
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Vehicles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;