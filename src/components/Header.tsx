
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Upload, Phone } from "lucide-react";
import UploadDesignDialog from "@/components/UploadDesignDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Designs", href: "/designs" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-background/90 backdrop-blur-xl border border-border rounded-2xl shadow-luxury">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">CF</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Custom Flex Patches</h1>
                <p className="text-xs text-muted-foreground">Trusted by Forces</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <UploadDesignDialog>
                <Button variant="outline" size="sm" className="gap-2 rounded-xl">
                  <Upload className="w-4 h-4" />
                  Upload Design
                </Button>
              </UploadDesignDialog>
              <Button variant="premium" size="sm" className="gap-2 rounded-xl">
                <Phone className="w-4 h-4" />
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors rounded-lg hover:bg-accent/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-fade-in">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-accent/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <UploadDesignDialog>
                    <Button variant="outline" size="sm" className="gap-2 rounded-xl">
                      <Upload className="w-4 h-4" />
                      Upload Design
                    </Button>
                  </UploadDesignDialog>
                  <Button variant="premium" size="sm" className="gap-2 rounded-xl">
                    <Phone className="w-4 h-4" />
                    Get Quote
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
