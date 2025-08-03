import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Star, Globe, ArrowRight } from "lucide-react";
import heroPatches from "@/assets/hero-patches.jpg";
import pafBadge from "@/assets/paf-badge.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroPatches} 
          alt="Premium Custom Patches" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="w-12 h-12 bg-accent/20 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-8 h-8 bg-primary/30 rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="flex items-center space-x-4 animate-slide-up">
              <img 
                src={pafBadge} 
                alt="Pakistan Air Force Badge" 
                className="w-16 h-16 rounded-full border-2 border-accent"
              />
              <div>
                <Badge variant="secondary" className="mb-2 bg-military-red text-military-red-foreground">
                  <Shield className="w-3 h-3 mr-1" />
                  Trusted by Pakistan Air Force
                </Badge>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">Defense Grade Quality</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Trusted by{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Forces
                </span>
                <br />
                Crafted for the{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  World
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Premium custom patches manufactured with military precision. From Pakistan Air Force to global brands - we deliver excellence in every stitch.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50K+</div>
                <div className="text-sm text-muted-foreground">Patches Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Global Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" className="group">
                Get Instant Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Globe className="w-5 h-5" />
                View Global Portfolio
              </Button>
            </div>

            {/* Global Expansion Notice */}
            <div className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-accent/20">
              <div className="w-3 h-3 bg-accent rounded-full animate-glow"></div>
              <span className="text-sm font-medium text-foreground">
                Now Expanding Globally - Worldwide Shipping Available
              </span>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Feature Card */}
              <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-8 shadow-premium border border-accent/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-foreground">Premium Quality</h3>
                    <Badge variant="outline" className="border-accent text-accent">
                      Military Grade
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Defense-grade materials</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Precision embroidery</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Custom designs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Fast worldwide delivery</span>
                    </div>
                  </div>

                  <Button variant="premium" className="w-full">
                    Start Your Project
                  </Button>
                </div>
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -top-4 -right-4 animate-bounce-in" style={{ animationDelay: '1s' }}>
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-accent">
                  ✓ PAF Approved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;