import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Plane, Bike, Building, Star, Users } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      id: "military",
      title: "Military & Defense",
      description: "Premium patches for armed forces, special operations, and defense contractors worldwide",
      icon: Shield,
      features: ["Rank insignias", "Unit patches", "Combat patches", "Special forces badges"],
      clients: "Pakistan Air Force, Defense Contractors",
      color: "military-red",
      popular: true
    },
    {
      id: "aviation",
      title: "Aviation & Aerospace",
      description: "Professional patches for pilots, aircrew, airlines, and aviation enthusiasts",
      icon: Plane,
      features: ["Pilot wings", "Squadron patches", "Airline badges", "Flight crew insignias"],
      clients: "Commercial Airlines, Private Aviation",
      color: "primary",
      popular: false
    },
    {
      id: "biker",
      title: "Biker & Motorcycle",
      description: "Custom patches for motorcycle clubs, riders, and automotive enthusiasts",
      icon: Bike,
      features: ["Club patches", "Ride patches", "Custom logos", "Event badges"],
      clients: "MC Clubs, Riding Groups",
      color: "secondary",
      popular: false
    },
    {
      id: "corporate",
      title: "Corporate & Brands",
      description: "Professional branding patches for companies, uniforms, and promotional items",
      icon: Building,
      features: ["Company logos", "Uniform patches", "Promotional items", "Brand merchandise"],
      clients: "Fortune 500 Companies, Startups",
      color: "accent",
      popular: false
    },
    {
      id: "sports",
      title: "Sports & Teams",
      description: "Team patches, tournament badges, and sports club insignias",
      icon: Star,
      features: ["Team logos", "Championship patches", "Player numbers", "Tournament badges"],
      clients: "Sports Teams, Leagues",
      color: "primary",
      popular: false
    },
    {
      id: "fashion",
      title: "Fashion & Lifestyle",
      description: "Trendy patches for fashion brands, streetwear, and lifestyle products",
      icon: Users,
      features: ["Fashion patches", "Streetwear logos", "Lifestyle brands", "Custom designs"],
      clients: "Fashion Brands, Influencers",
      color: "accent",
      popular: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent text-accent mb-4">
            Product Categories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground">
            Patches for Every{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Purpose
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From military precision to fashion statements - we craft premium patches for every industry and application
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`group hover:shadow-hover transition-all duration-500 hover:scale-105 border-2 hover:border-accent/50 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    {category.popular && (
                      <Badge variant="default" className="bg-military-red">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Specializations:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Clients */}
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="text-xs font-semibold text-accent mb-1">TRUSTED BY:</div>
                    <div className="text-sm text-foreground">{category.clients}</div>
                  </div>
                  
                  {/* CTA */}
                  <Button 
                    variant={category.popular ? "premium" : "outline"} 
                    className="w-full group-hover:shadow-accent"
                  >
                    Get Quote for {category.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="space-y-6 p-8 bg-gradient-primary rounded-2xl text-primary-foreground">
            <h3 className="text-3xl font-bold">Don't See Your Category?</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We specialize in custom solutions for unique requirements. Let's discuss your specific needs.
            </p>
            <Button variant="hero" size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;