
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">CF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Custom Flex Patches</h3>
                <p className="text-sm text-primary-foreground/80">Trusted by Forces</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Premium patch manufacturing company trusted by Pakistan Air Force, now serving clients globally with defense-grade quality and precision.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Products", href: "#products" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Patch Designs", href: "/designs" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Our Services</h4>
            <div className="flex flex-col space-y-3">
              {[
                "Military Patches",
                "Aviation Badges",
                "Corporate Logos",
                "Biker Patches",
                "Sports Team Badges",
                "Fashion Embroidery",
              ].map((service) => (
                <span
                  key={service}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>info@customflexpatches.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <Button variant="premium" className="w-full">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Custom Flex Patches. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="/shipping" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
