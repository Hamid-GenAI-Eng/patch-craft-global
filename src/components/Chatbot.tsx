import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const businessKnowledge = {
  "about": "Custom Flex Patches is a premium patch manufacturing company trusted by Pakistan Air Force and expanding globally. We specialize in embroidered, PVC, velcro, and custom patches with defense-grade quality.",
  "services": "We offer custom embroidered patches, PVC patches, velcro patches, military patches, aviation patches, biker patches, corporate patches, sports team patches, and fashion brand patches.",
  "quality": "We maintain defense-grade quality standards, trusted by Pakistan Air Force. All patches are made with precision embroidery and premium materials.",
  "experience": "We have 15+ years of experience, delivered 50,000+ patches to 100+ global clients.",
  "markets": "We serve military, aviation, bikers, corporate brands, fashion labels, clubs, and sports teams globally.",
  "shipping": "We offer worldwide shipping with fast production times for bulk orders.",
  "quote": "You can request a quote by clicking 'Get Quote' button or using our contact form. We provide instant quotes for most projects.",
  "upload": "You can upload your custom design using our 'Upload Design' feature for personalized patches.",
  "contact": "You can reach us via WhatsApp, email, or phone. We're available for consultations and support."
};

const getResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes("about") || message.includes("who") || message.includes("company")) {
    return businessKnowledge.about;
  }
  if (message.includes("service") || message.includes("what") || message.includes("product")) {
    return businessKnowledge.services;
  }
  if (message.includes("quality") || message.includes("military") || message.includes("paf") || message.includes("air force")) {
    return businessKnowledge.quality;
  }
  if (message.includes("experience") || message.includes("year") || message.includes("how long")) {
    return businessKnowledge.experience;
  }
  if (message.includes("market") || message.includes("client") || message.includes("customer")) {
    return businessKnowledge.markets;
  }
  if (message.includes("ship") || message.includes("deliver") || message.includes("worldwide")) {
    return businessKnowledge.shipping;
  }
  if (message.includes("quote") || message.includes("price") || message.includes("cost")) {
    return businessKnowledge.quote;
  }
  if (message.includes("upload") || message.includes("design") || message.includes("custom")) {
    return businessKnowledge.upload;
  }
  if (message.includes("contact") || message.includes("reach") || message.includes("phone") || message.includes("email")) {
    return businessKnowledge.contact;
  }
  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return "Hello! Welcome to Custom Flex Patches. I'm here to help you with any questions about our premium patch manufacturing services. How can I assist you today?";
  }
  
  return "I'd be happy to help! I can provide information about our services, quality standards, pricing, shipping, and more. Feel free to ask about our patch manufacturing, Pakistan Air Force partnership, or how to get started with your custom patch project.";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your Custom Flex Patches assistant. Ask me about our premium patch manufacturing services, quality standards, or how to get started with your project!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-luxury hover:shadow-glow transition-all duration-300 bg-gradient-luxury hover:scale-110"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-card/95 backdrop-blur-lg border border-accent/20 shadow-premium animate-fade-in-scale">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-luxury rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Custom Flex Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me anything!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 h-64">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && (
                        <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      {message.sender === 'user' && (
                        <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our patches..."
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                size="icon"
                variant="premium"
                className="shadow-accent"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;