import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, Clock, Shield, Users, Zap } from "lucide-react";
import factoryFloor from "@/assets/factory-floor.jpg";
import pafBadge from "@/assets/paf-badge.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "15+ Years",
      subtitle: "Industry Experience",
      description: "Serving defense and commercial sectors"
    },
    {
      icon: Shield,
      title: "PAF Trusted",
      subtitle: "Military Partnership",
      description: "Official supplier to Pakistan Air Force"
    },
    {
      icon: Globe,
      title: "Global Reach",
      subtitle: "Worldwide Shipping",
      description: "Delivering to 50+ countries"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      subtitle: "7-14 Days",
      description: "Quick turnaround on all orders"
    }
  ];

  const stats = [
    { number: "500K+", label: "Patches Manufactured" },
    { number: "100+", label: "Global Clients" },
    { number: "99.8%", label: "Quality Rating" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary text-primary mb-4">
            About Custom Flex Patches
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground">
            Crafting Excellence{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Since 2008
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From our humble beginnings to becoming the trusted partner of Pakistan Air Force, we've built our reputation on quality, precision, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge with PAF */}
            <div className="flex items-center space-x-4 p-6 bg-card rounded-2xl border border-accent/20">
              <img 
                src={pafBadge} 
                alt="Pakistan Air Force Partnership" 
                className="w-20 h-20 rounded-full border-2 border-military-red"
              />
              <div>
                <h3 className="text-2xl font-bold text-foreground">Official PAF Supplier</h3>
                <p className="text-muted-foreground">Trusted partner for defense-grade patch manufacturing</p>
                <Badge variant="default" className="bg-military-red mt-2">
                  <Shield className="w-3 h-3 mr-1" />
                  Military Certified
                </Badge>
              </div>
            </div>

            {/* Our Story */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Our Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2008, Custom Flex Patches began as a small workshop with a big vision: to create the world's finest custom patches with military-grade precision.
                </p>
                <p>
                  Our breakthrough came when Pakistan Air Force selected us as their official patch supplier, recognizing our commitment to quality, precision, and reliability. This partnership became the foundation of our reputation for excellence.
                </p>
                <p>
                  Today, we're expanding globally, bringing the same defense-grade quality to clients worldwide - from Fortune 500 companies to motorcycle clubs, from airlines to fashion brands.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Innovation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Trust</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Global</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-scale">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={factoryFloor} 
                alt="Modern Manufacturing Facility" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">State-of-the-Art Facility</h4>
                <p className="text-white/90">Modern equipment, precision manufacturing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index} 
                className="text-center group hover:shadow-hover transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{achievement.title}</h3>
                    <h4 className="text-lg font-semibold text-accent">{achievement.subtitle}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-12">
            Numbers That Speak for Themselves
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-3xl font-bold text-foreground">Ready to Experience the Difference?</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the ranks of satisfied clients worldwide. From concept to delivery, we're with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="xl">
              Start Your Project Today
            </Button>
            <Button variant="outline" size="xl">
              View Client Testimonials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;