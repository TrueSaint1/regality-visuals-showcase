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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-center">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block text-center">
                Hello. We're Love Regality Productions
              </span>
            </h1>
            
            <div className="space-y-6 max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-center">
                <span className="text-cyan-400">We make commercials.</span>{" "}
                <span className="text-blue-500">The kind people</span>{" "}
                <span className="text-orange-500">like.</span>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="space-y-16 animate-slide-up">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Bringing Stories to Life
              </h2>
              <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
                From concept to creation, we craft visual narratives that captivate, 
                inspire, and drive results for brands that dare to be different.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-10 py-7 text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recent <span className="text-brand-orange">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a taste of our creative storytelling with these featured projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Video 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-black relative">
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Tech Startup Commercial</h3>
                  <p className="text-sm opacity-90">InnovateTech</p>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-black relative">
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Fashion Brand Campaign</h3>
                  <p className="text-sm opacity-90">StyleForward</p>
                </div>
              </div>
            </div>

            {/* Video 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video bg-black relative">
                <video
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Restaurant Promo</h3>
                  <p className="text-sm opacity-90">Culinary Dreams</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-12 py-6 text-lg"
            >
              <Link to="/work">
                See More Work
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;