import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Upload, 
  Send,
  Globe,
  Shield,
  Zap
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    patchType: "",
    quantity: "",
    message: "",
    file: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92-300-XXXXXXX", "+92-321-XXXXXXX"],
      description: "Speak directly with our patch specialists"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@customflexpatches.com", "quotes@customflexpatches.com"],
      description: "Get detailed quotes and information"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Karachi, Pakistan", "Global Shipping Available"],
      description: "Manufacturing facility tours available"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM PKT", "24/7 WhatsApp Support"],
      description: "Always here when you need us"
    }
  ];

  const quickFeatures = [
    {
      icon: Zap,
      text: "48-hour quote response"
    },
    {
      icon: Shield,
      text: "Military-grade quality"
    },
    {
      icon: Globe,
      text: "Worldwide shipping"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent text-accent mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Let's Create Something{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your patch ideas to life? Our team of specialists is here to guide you from concept to completion.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground">
                Whether you need a single custom patch or bulk orders for your organization, we're here to help bring your vision to life.
              </p>
            </div>

            {/* Quick Features */}
            <div className="space-y-4">
              {quickFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="hover:shadow-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-accent font-medium">{detail}</p>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-accent border-accent">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-accent-foreground" />
                <h4 className="text-xl font-bold text-accent-foreground mb-2">WhatsApp Direct</h4>
                <p className="text-accent-foreground/80 mb-4">Get instant responses on WhatsApp</p>
                <Button variant="hero" className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right - Quote Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground">Request a Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company/Organization</label>
                      <Input
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Patch Type *</label>
                      <select 
                        className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring"
                        value={formData.patchType}
                        onChange={(e) => setFormData({...formData, patchType: e.target.value})}
                        required
                      >
                        <option value="">Select patch type</option>
                        <option value="embroidered">Embroidered Patch</option>
                        <option value="pvc">PVC Patch</option>
                        <option value="velcro">Velcro Patch</option>
                        <option value="iron-on">Iron-on Patch</option>
                        <option value="custom">Custom Design</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Quantity *</label>
                    <select 
                      className="w-full p-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      required
                    >
                      <option value="">Select quantity</option>
                      <option value="1-50">1-50 patches</option>
                      <option value="51-100">51-100 patches</option>
                      <option value="101-500">101-500 patches</option>
                      <option value="501-1000">501-1000 patches</option>
                      <option value="1000+">1000+ patches</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your patch requirements, colors, size, design details, timeline, etc."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Upload Design Files</label>
                    <div className="border-2 border-dashed border-accent/30 rounded-lg p-8 text-center hover:border-accent/50 transition-colors">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-accent" />
                      <p className="text-foreground font-medium mb-2">Drop your design files here or click to browse</p>
                      <p className="text-sm text-muted-foreground">Support: JPG, PNG, PDF, AI, PSD (Max 10MB)</p>
                      <input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                        onChange={(e) => setFormData({...formData, file: e.target.files?.[0] || null})}
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => document.getElementById('file-upload')?.click()}
                      >
                        Browse Files
                      </Button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Quote Request
                  </Button>
                </form>

                {/* Quick Contact Options */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-center text-muted-foreground mb-4">Need immediate assistance?</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-20 text-center">
          <div className="bg-card rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by Pakistan Air Force & Growing Globally
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients worldwide who trust us for their patch manufacturing needs. From military precision to fashion statements, we deliver excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-military-red text-military-red">
                Pakistan Air Force Certified
              </Badge>
              <Badge variant="outline" className="border-accent text-accent">
                Global Shipping
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                15+ Years Experience
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;