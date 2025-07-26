import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollDown from "@/components/ScrollDown";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* First Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-foreground">Hello. We're </span>
              <span className="bg-gradient-to-r from-brand-orange via-brand-blue to-brand-green bg-clip-text text-transparent animate-brand-glow">
                Love Regality Productions
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-foreground font-medium">
                We make commercials. <span className="text-brand-blue">The kind</span> <span className="text-brand-orange">people like.</span>
              </p>
            </div>
          </div>
        </div>
        
        <ScrollDown />
      </section>

      {/* Second Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="space-y-12 animate-slide-up">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Bringing Stories to Life
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                From concept to creation, we craft visual narratives that captivate, 
                inspire, and drive results for brands that dare to be different.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-6 text-lg"
              >
                <Link to="/work">
                  View Our Work
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;