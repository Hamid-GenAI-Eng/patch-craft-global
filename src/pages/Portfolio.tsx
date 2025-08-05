
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Download, Star, Shield, Award, Zap } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Military", "Aviation", "Corporate", "Biker", "Sports", "Fashion"];

  // Sample portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Pakistan Air Force Squadron Badge",
      category: "Military",
      image: "/api/placeholder/400/300",
      client: "Pakistan Air Force",
      year: "2024",
      featured: true,
      tags: ["Embroidered", "Premium", "Military Grade"]
    },
    {
      id: 2,
      title: "Corporate Logo Patch",
      category: "Corporate",
      image: "/api/placeholder/400/300",
      client: "Tech Solutions Inc",
      year: "2024",
      featured: false,
      tags: ["PVC", "Durable", "Custom Design"]
    },
    {
      id: 3,
      title: "Aviation Wings Badge",
      category: "Aviation",
      image: "/api/placeholder/400/300",
      client: "Flight Academy",
      year: "2023",
      featured: true,
      tags: ["Metallic Thread", "Premium", "Gold Finish"]
    },
    {
      id: 4,
      title: "Biker Club Patch",
      category: "Biker",
      image: "/api/placeholder/400/300",
      client: "Thunder Riders MC",
      year: "2024",
      featured: false,
      tags: ["Large Size", "Velcro", "Weather Resistant"]
    },
    {
      id: 5,
      title: "Sports Team Logo",
      category: "Sports",
      image: "/api/placeholder/400/300",
      client: "Victory FC",
      year: "2024",
      featured: false,
      tags: ["Team Colors", "Bulk Order", "Fast Delivery"]
    },
    {
      id: 6,
      title: "Fashion Brand Emblem",
      category: "Fashion",
      image: "/api/placeholder/400/300",
      client: "Elite Fashion",
      year: "2023",
      featured: true,
      tags: ["Luxury", "Small Details", "High Quality"]
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const stats = [
    { icon: Shield, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "50+", label: "Happy Clients" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
    { icon: Zap, value: "5-7", label: "Days Delivery" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              Our Work Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Crafted with <span className="text-accent">Precision</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Explore our collection of premium patches trusted by military forces, corporations, 
              and organizations worldwide. Each piece represents our commitment to excellence.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-luxury transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "premium" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full px-6 transition-all duration-300"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 bg-gradient-to-br from-card to-muted/10 hover:shadow-luxury transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.featured && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <Button size="sm" variant="secondary" className="gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    Client: <span className="font-medium text-foreground">{item.client}</span>
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
