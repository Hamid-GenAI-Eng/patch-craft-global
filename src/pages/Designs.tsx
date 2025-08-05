
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Heart, Download, Share2, Filter } from "lucide-react";

const Designs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Military", "Aviation", "Corporate", "Biker", "Sports", "Fashion", "Religious", "Custom"];

  const designs = [
    {
      id: 1,
      title: "Military Eagle Shield",
      category: "Military",
      image: "/api/placeholder/300/300",
      downloads: 1205,
      likes: 89,
      tags: ["Eagle", "Shield", "Military", "Honor"],
      premium: true
    },
    {
      id: 2,
      title: "Aviation Wings Gold",
      category: "Aviation",
      image: "/api/placeholder/300/300",
      downloads: 856,
      likes: 67,
      tags: ["Wings", "Aviation", "Gold", "Pilot"],
      premium: false
    },
    {
      id: 3,
      title: "Corporate Modern Logo",
      category: "Corporate",
      image: "/api/placeholder/300/300",
      downloads: 445,
      likes: 34,
      tags: ["Modern", "Clean", "Corporate", "Professional"],
      premium: false
    },
    {
      id: 4,
      title: "Skull Biker Patch",
      category: "Biker",
      image: "/api/placeholder/300/300",
      downloads: 1890,
      likes: 156,
      tags: ["Skull", "Biker", "Motorcycle", "Rock"],
      premium: true
    },
    {
      id: 5,
      title: "Football Team Badge",
      category: "Sports",
      image: "/api/placeholder/300/300",
      downloads: 723,
      likes: 42,
      tags: ["Football", "Team", "Sports", "Victory"],
      premium: false
    },
    {
      id: 6,
      title: "Fashion Rose Emblem",
      category: "Fashion",
      image: "/api/placeholder/300/300",
      downloads: 334,
      likes: 78,
      tags: ["Rose", "Fashion", "Elegant", "Floral"],
      premium: true
    },
    {
      id: 7,
      title: "Islamic Calligraphy",
      category: "Religious",
      image: "/api/placeholder/300/300",
      downloads: 567,
      likes: 91,
      tags: ["Islamic", "Calligraphy", "Arabic", "Religious"],
      premium: false
    },
    {
      id: 8,
      title: "Custom Name Tag",
      category: "Custom",
      image: "/api/placeholder/300/300",
      downloads: 289,
      likes: 23,
      tags: ["Name", "Custom", "Personal", "Text"],
      premium: false
    }
  ];

  const filteredDesigns = designs.filter(design => {
    const matchesCategory = selectedCategory === "All" || design.category === selectedCategory;
    const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         design.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              Design Gallery
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Patch <span className="text-accent">Designs</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Browse our extensive collection of professional patch designs. 
              Find inspiration or use our templates for your custom patches.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-border bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search designs, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "premium" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDesigns.map((design) => (
              <Card key={design.id} className="group overflow-hidden border-0 bg-gradient-to-br from-card to-muted/10 hover:shadow-luxury transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {design.premium && (
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs">
                      Premium
                    </Badge>
                  )}

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="gap-1">
                        <Heart className="w-4 h-4" />
                        {design.likes}
                      </Button>
                      <Button size="sm" variant="secondary" className="gap-1">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {design.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {design.downloads} downloads
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {design.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {design.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {design.likes}
                    </span>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Use This Design
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredDesigns.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-foreground mb-2">No designs found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Designs;
