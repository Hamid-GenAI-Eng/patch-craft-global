import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Star, Zap, Shield, Truck, Clock } from "lucide-react";

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState("embroidered");

  const quantities = ["50-99", "100-249", "250-499", "500-999", "1000+"];
  const sizes = ['1"', '2"', '3"', '4"', '5"'];

  const categoryPricing = {
    embroidered: {
      name: "Embroidered Patches",
      description: "Premium quality embroidered patches with various backing options",
      prices: {
        '1"': [120, 95, 75, 60, 45],
        '2"': [180, 150, 120, 95, 75],
        '3"': [250, 220, 180, 150, 120],
        '4"': [320, 280, 240, 200, 160],
        '5"': [400, 350, 300, 250, 200],
      }
    },
    pvc: {
      name: "PVC Patches",
      description: "Durable 3D PVC patches, waterproof and long-lasting",
      prices: {
        '1"': [150, 125, 100, 80, 65],
        '2"': [220, 190, 160, 130, 100],
        '3"': [300, 270, 230, 190, 150],
        '4"': [380, 340, 290, 240, 190],
        '5"': [450, 400, 350, 290, 230],
      }
    },
    woven: {
      name: "Woven Patches",
      description: "Fine detail woven patches with crisp text and intricate designs",
      prices: {
        '1"': [100, 80, 65, 50, 40],
        '2"': [160, 130, 110, 85, 70],
        '3"': [220, 190, 160, 130, 105],
        '4"': [280, 240, 210, 170, 140],
        '5"': [350, 300, 260, 210, 175],
      }
    },
    leather: {
      name: "Leather Patches",
      description: "Premium genuine leather patches with debossed or laser engraving",
      prices: {
        '1"': [200, 170, 140, 120, 95],
        '2"': [280, 240, 200, 170, 135],
        '3"': [380, 330, 280, 240, 190],
        '4"': [480, 420, 360, 310, 245],
        '5"': [580, 510, 440, 380, 300],
      }
    },
    chenille: {
      name: "Chenille Patches",
      description: "Vintage-style chenille patches perfect for letterman jackets",
      prices: {
        '1"': [180, 150, 125, 100, 80],
        '2"': [260, 220, 185, 150, 120],
        '3"': [350, 300, 250, 200, 160],
        '4"': [440, 380, 320, 260, 210],
        '5"': [530, 460, 390, 320, 260],
      }
    }
  };

  const features = [
    { icon: <Shield className="w-5 h-5" />, title: "Premium Quality", desc: "Military-grade materials" },
    { icon: <Truck className="w-5 h-5" />, title: "Fast Delivery", desc: "3-7 business days" },
    { icon: <Star className="w-5 h-5" />, title: "Custom Design", desc: "Free design consultation" },
    { icon: <Clock className="w-5 h-5" />, title: "Quick Turnaround", desc: "Rush orders available" },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "5,000",
      description: "Perfect for small teams and units",
      features: [
        "50-100 patches",
        "2 revisions included",
        "Standard shipping",
        "Basic design support",
        "7-day delivery"
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "15,000",
      description: "Most popular for military units",
      features: [
        "250-500 patches",
        "Unlimited revisions",
        "Priority shipping",
        "Premium design support",
        "5-day delivery",
        "Bulk discount applied"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "35,000",
      description: "Large orders for organizations",
      features: [
        "1000+ patches",
        "Unlimited revisions",
        "Express shipping",
        "Dedicated account manager",
        "3-day delivery",
        "Maximum bulk discount",
        "Quality guarantee"
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple, Fair <span className="text-transparent bg-clip-text bg-gradient-accent">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional patches and badges at competitive prices. No hidden fees, 
              just quality craftsmanship for your military and organizational needs.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Choose Your Package
              </h2>
              <p className="text-lg text-muted-foreground">
                Select the package that best fits your requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative border-2 hover:shadow-luxury transition-all duration-300 ${
                    plan.popular 
                      ? 'border-accent bg-gradient-to-br from-accent/5 to-transparent' 
                      : 'border-border hover:border-accent/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground px-4 py-1 rounded-full">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                    <div className="pt-4">
                      <span className="text-4xl sm:text-5xl font-bold text-foreground">
                        PKR {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2">starting from</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full rounded-xl ${
                        plan.popular 
                          ? 'bg-accent hover:bg-accent/90' 
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Pricing Tables */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Detailed Pricing by Size
              </h2>
              <p className="text-lg text-muted-foreground">
                View our complete pricing structure for all sizes and quantities
              </p>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8 max-w-4xl mx-auto h-auto p-1 bg-muted">
                <TabsTrigger value="embroidered" className="rounded-lg p-3 text-sm">Embroidered</TabsTrigger>
                <TabsTrigger value="pvc" className="rounded-lg p-3 text-sm">PVC</TabsTrigger>
                <TabsTrigger value="woven" className="rounded-lg p-3 text-sm">Woven</TabsTrigger>
                <TabsTrigger value="leather" className="rounded-lg p-3 text-sm">Leather</TabsTrigger>
                <TabsTrigger value="chenille" className="rounded-lg p-3 text-sm">Chenille</TabsTrigger>
              </TabsList>

              {Object.entries(categoryPricing).map(([categoryKey, category]) => (
                <TabsContent key={categoryKey} value={categoryKey}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">{category.name} - Pricing Chart (PKR)</CardTitle>
                      <CardDescription>
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="overflow-x-auto">
                      <div className="min-w-[600px]">
                        {/* Header Row with Quantities */}
                        <div className="grid grid-cols-6 gap-2 mb-2">
                          <div className="font-semibold text-center p-3 bg-muted rounded-lg">
                            Size / Quantity
                          </div>
                          {quantities.map((quantity) => (
                            <div key={quantity} className="font-semibold text-center p-3 bg-muted rounded-lg text-sm">
                              {quantity} pcs
                            </div>
                          ))}
                        </div>

                        {/* Price Grid */}
                        {sizes.map((size) => (
                          <div key={size} className="grid grid-cols-6 gap-2 mb-2">
                            <div className="font-semibold text-center p-3 bg-accent/10 rounded-lg flex items-center justify-center">
                              {size}
                            </div>
                            {category.prices[size].map((price, index) => (
                              <div 
                                key={index} 
                                className={`text-center p-3 rounded-lg border transition-all duration-200 hover:shadow-md ${
                                  index === 2 ? 'bg-accent/20 border-accent text-accent-foreground font-semibold' : 'bg-background border-border hover:border-accent/30'
                                }`}
                              >
                                <div className="text-lg font-bold">PKR {price}</div>
                                {index === 2 && (
                                  <Badge variant="secondary" className="mt-1 text-xs">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                            ))}
                          </div>
                        ))}

                        {/* Legend */}
                        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                          <div className="text-sm text-muted-foreground">
                            <div className="font-semibold mb-2">Pricing Notes:</div>
                            <ul className="space-y-1 text-xs">
                              <li>• Prices include standard backing (velcro, iron-on, or sew-on)</li>
                              <li>• Custom shapes and special requirements may affect pricing</li>
                              <li>• Bulk discounts available for orders over 1000 pieces</li>
                              <li>• Setup fee may apply for new designs</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Us?
              </h2>
              <p className="text-lg text-muted-foreground">
                Premium quality and service in every order
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-accent">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-accent text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a custom quote or to discuss your specific requirements. 
              Our team is ready to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-xl bg-background text-foreground hover:bg-background/90">
                Get Custom Quote
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Pricing;