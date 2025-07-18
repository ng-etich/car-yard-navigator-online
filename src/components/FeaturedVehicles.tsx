import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Fuel, Calendar, Users, Eye } from "lucide-react";
import featuredCarsImage from "@/assets/featured-cars.jpg";

const FeaturedVehicles = () => {
  const vehicles = [
    {
      id: 1,
      name: "BMW M4 Competition",
      price: "$89,900",
      year: "2023",
      fuel: "Premium",
      seats: "4",
      image: featuredCarsImage,
      mileage: "12,500 miles",
      type: "Sports Coupe"
    },
    {
      id: 2,
      name: "Mercedes-Benz GLE 350",
      price: "$67,500",
      year: "2022",
      fuel: "Premium",
      seats: "7",
      image: featuredCarsImage,
      mileage: "28,000 miles",
      type: "Luxury SUV"
    },
    {
      id: 3,
      name: "Audi A8 L Quattro",
      price: "$95,200",
      year: "2023",
      fuel: "Premium",
      seats: "5",
      image: featuredCarsImage,
      mileage: "8,200 miles",
      type: "Executive Sedan"
    }
  ];

  return (
    <section className="py-20 bg-gradient-automotive">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium vehicles that represent the best in automotive excellence
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle, index) => (
            <Card 
              key={vehicle.id} 
              className="group hover:shadow-automotive transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Vehicle Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {vehicle.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="icon" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
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
                      <div className="text-2xl font-bold text-primary">{vehicle.price}</div>
                    </div>
                  </div>

                  {/* Vehicle Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-border/50">
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

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={`/vehicle/${vehicle.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="automotive" className="flex-1" asChild>
                      <Link to="/contact">
                        Schedule Test Drive
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="premium" size="lg" asChild>
            <Link to="/inventory">
              View All Vehicles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;