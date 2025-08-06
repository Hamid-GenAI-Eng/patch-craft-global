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
  const [selectedCategory, setSelectedCategory] = useState("patches");

  const patchPricing = [
    { size: '1"', quantity: "50-99", price: "120", popular: false },
    { size: '1"', quantity: "100-249", price: "95", popular: false },
    { size: '1"', quantity: "250-499", price: "75", popular: true },
    { size: '1"', quantity: "500+", price: "60", popular: false },
    { size: '2"', quantity: "50-99", price: "180", popular: false },
    { size: '2"', quantity: "100-249", price: "150", popular: false },
    { size: '2"', quantity: "250-499", price: "120", popular: true },
    { size: '2"', quantity: "500+", price: "95", popular: false },
    { size: '3"', quantity: "50-99", price: "250", popular: false },
    { size: '3"', quantity: "100-249", price: "220", popular: false },
    { size: '3"', quantity: "250-499", price: "180", popular: true },
    { size: '3"', quantity: "500+", price: "150", popular: false },
    { size: '4"', quantity: "50-99", price: "320", popular: false },
    { size: '4"', quantity: "100-249", price: "280", popular: false },
    { size: '4"', quantity: "250-499", price: "240", popular: true },
    { size: '4"', quantity: "500+", price: "200", popular: false },
  ];

  const badgePricing = [
    { size: '1.5"', quantity: "50-99", price: "150", popular: false },
    { size: '1.5"', quantity: "100-249", price: "120", popular: false },
    { size: '1.5"', quantity: "250-499", price: "95", popular: true },
    { size: '1.5"', quantity: "500+", price: "75", popular: false },
    { size: '2.5"', quantity: "50-99", price: "220", popular: false },
    { size: '2.5"', quantity: "100-249", price: "180", popular: false },
    { size: '2.5"', quantity: "250-499", price: "150", popular: true },
    { size: '2.5"', quantity: "500+", price: "120", popular: false },
    { size: '3.5"', quantity: "50-99", price: "300", popular: false },
    { size: '3.5"', quantity: "100-249", price: "260", popular: false },
    { size: '3.5"', quantity: "250-499", price: "220", popular: true },
    { size: '3.5"', quantity: "500+", price: "180", popular: false },
  ];

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
              <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
                <TabsTrigger value="patches" className="rounded-xl">Patches</TabsTrigger>
                <TabsTrigger value="badges" className="rounded-xl">Badges</TabsTrigger>
              </TabsList>

              <TabsContent value="patches">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Patch Pricing (PKR)</CardTitle>
                    <CardDescription>
                      Professional embroidered patches with backing options
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Size</TableHead>
                          <TableHead className="font-semibold">Quantity</TableHead>
                          <TableHead className="font-semibold text-right">Price per piece (PKR)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {patchPricing.map((item, index) => (
                          <TableRow 
                            key={index}
                            className={item.popular ? 'bg-accent/10 border-accent/20' : ''}
                          >
                            <TableCell className="font-medium">{item.size}</TableCell>
                            <TableCell>
                              {item.quantity}
                              {item.popular && (
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  Popular
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right font-semibold">
                              PKR {item.price}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="badges">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Badge Pricing (PKR)</CardTitle>
                    <CardDescription>
                      Premium metal and fabric badges with custom designs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Size</TableHead>
                          <TableHead className="font-semibold">Quantity</TableHead>
                          <TableHead className="font-semibold text-right">Price per piece (PKR)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {badgePricing.map((item, index) => (
                          <TableRow 
                            key={index}
                            className={item.popular ? 'bg-accent/10 border-accent/20' : ''}
                          >
                            <TableCell className="font-medium">{item.size}</TableCell>
                            <TableCell>
                              {item.quantity}
                              {item.popular && (
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  Popular
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right font-semibold">
                              PKR {item.price}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
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