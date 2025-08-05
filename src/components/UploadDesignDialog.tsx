
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, X, CheckCircle, Clock, DollarSign, Ruler } from "lucide-react";

interface UploadDesignDialogProps {
  children: React.ReactNode;
}

const UploadDesignDialog = ({ children }: UploadDesignDialogProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    patchType: "",
    size: "",
    quantity: "",
    backing: "",
    deadline: "",
    additionalInfo: ""
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { formData, files: selectedFiles });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Upload Your Design
          </DialogTitle>
          <DialogDescription className="text-center">
            Get a professional quote for your custom patch design
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload Section */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Design Files</Label>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-accent/50 transition-colors">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop your design files here, or click to browse
              </p>
              <Input
                type="file"
                multiple
                accept="image/*,.ai,.eps,.pdf,.svg"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <Button type="button" variant="outline" className="gap-2">
                  <Upload className="w-4 h-4" />
                  Choose Files
                </Button>
              </Label>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: JPG, PNG, AI, EPS, PDF, SVG (Max 10MB each)
              </p>
            </div>

            {/* Selected Files */}
            {selectedFiles.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">Selected Files:</Label>
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{file.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </Badge>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity *</Label>
              <Select onValueChange={(value) => handleInputChange("quantity", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-25">1-25 pieces</SelectItem>
                  <SelectItem value="26-50">26-50 pieces</SelectItem>
                  <SelectItem value="51-100">51-100 pieces</SelectItem>
                  <SelectItem value="101-250">101-250 pieces</SelectItem>
                  <SelectItem value="251-500">251-500 pieces</SelectItem>
                  <SelectItem value="500+">500+ pieces</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Patch Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Patch Type *</Label>
              <Select onValueChange={(value) => handleInputChange("patchType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="embroidered">Embroidered</SelectItem>
                  <SelectItem value="pvc">PVC/Rubber</SelectItem>
                  <SelectItem value="woven">Woven</SelectItem>
                  <SelectItem value="leather">Leather</SelectItem>
                  <SelectItem value="printed">Printed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Size</Label>
              <Select onValueChange={(value) => handleInputChange("size", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1x1">1" x 1"</SelectItem>
                  <SelectItem value="2x2">2" x 2"</SelectItem>
                  <SelectItem value="3x3">3" x 3"</SelectItem>
                  <SelectItem value="4x4">4" x 4"</SelectItem>
                  <SelectItem value="custom">Custom Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Backing</Label>
              <Select onValueChange={(value) => handleInputChange("backing", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select backing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iron-on">Iron-on</SelectItem>
                  <SelectItem value="sew-on">Sew-on</SelectItem>
                  <SelectItem value="velcro">Velcro</SelectItem>
                  <SelectItem value="adhesive">Adhesive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Deadline */}
          <div className="space-y-2">
            <Label htmlFor="deadline">Preferred Deadline</Label>
            <Input
              id="deadline"
              type="date"
              value={formData.deadline}
              onChange={(e) => handleInputChange("deadline", e.target.value)}
            />
          </div>

          {/* Additional Information */}
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              placeholder="Any special requirements, color preferences, or additional details..."
              rows={4}
            />
          </div>

          {/* Process Timeline */}
          <div className="bg-muted/20 rounded-lg p-6">
            <h3 className="font-semibold mb-4">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Upload className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-sm">1. Upload Complete</p>
                  <p className="text-xs text-muted-foreground">Your design is received</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-sm">2. Quote Sent</p>
                  <p className="text-xs text-muted-foreground">Within 2-4 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-sm">3. Production</p>
                  <p className="text-xs text-muted-foreground">5-7 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button type="submit" className="flex-1" variant="premium" size="lg">
              Get Free Quote
            </Button>
            <Button type="button" variant="outline" size="lg" className="gap-2">
              <Ruler className="w-4 h-4" />
              Size Guide
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadDesignDialog;
