import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Leading creative vision with 10+ years in commercial production"
    },
    {
      name: "Sarah Chen",
      role: "Director of Photography",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning cinematographer specializing in brand storytelling"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Editor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Post-production expert crafting compelling narratives"
    },
    {
      name: "Emily Davis",
      role: "Producer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Project management specialist ensuring smooth production flow"
    }
  ];

  const clients = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop" },
    { name: "StyleBrand", logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop" },
    { name: "FoodieChain", logo: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=200&h=200&fit=crop" },
    { name: "GlobalBank", logo: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop" },
    { name: "EcoGreen", logo: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=200&h=200&fit=crop" },
    { name: "HealthPlus", logo: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=200&h=200&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  <span className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent animate-color-shift">Home</span>
                </Link>
              </Button>
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent animate-color-shift">
                About Us
              </h1>
              <p className="text-xl max-w-2xl mx-auto bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
                We're a passionate team of creatives dedicated to bringing your brand's story to life through compelling visual content.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 shadow-xl backdrop-blur-xl bg-white/10 border border-white/20">
                <CardContent className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-color-shift">
                    Our Story
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
                        Founded in 2018, Love Regality Productions emerged from a simple belief: 
                        every brand has a unique story worth telling. We specialize in creating 
                        commercials that don't just sell products, but build emotional connections 
                        between brands and their audiences.
                      </p>
                      
                      <p className="text-lg leading-relaxed bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                        Our approach combines cutting-edge technology with timeless storytelling 
                        principles. We believe that the best commercials are the ones people 
                        actually want to watch, share, and remember.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-orange-400 to-blue-400 p-6 rounded-lg text-white backdrop-blur-xl">
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">Our Mission</h3>
                        <p className="text-lg bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
                          To create visual content that not only captures attention but also 
                          drives meaningful engagement and lasting brand impact.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">150+</div>
                          <div className="text-sm bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Projects</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50+</div>
                          <div className="text-sm bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Clients</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">5</div>
                          <div className="text-sm bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-orange-400 to-blue-400 bg-clip-text text-transparent animate-color-shift">
                Meet Our Team
              </h2>
              <p className="text-xl bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
                The creative minds behind our award-winning productions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                      />
                      <h3 className="text-xl font-bold text-foreground">
                        {member.name}
                      </h3>
                      <Badge variant="secondary" className="mt-2">
                        {member.role}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Trusted by <span className="text-brand-orange">Industry Leaders</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We're proud to work with amazing brands across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-muted">
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {client.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;