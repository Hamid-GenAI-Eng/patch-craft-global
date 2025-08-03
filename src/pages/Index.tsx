import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <AboutSection />
        <ContactSection />
      </main>
      <Chatbot />
    </div>
  );
};

export default Index;
