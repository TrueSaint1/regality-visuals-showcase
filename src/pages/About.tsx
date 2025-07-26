import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" },
    { name: "StyleBrand", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" },
    { name: "FoodieChain", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" },
    { name: "GlobalBank", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" },
    { name: "EcoGreen", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" },
    { name: "HealthPlus", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-brand-blue">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a passionate team of creatives dedicated to bringing your brand's story to life through compelling visual content.
            </p>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 shadow-xl">
                <CardContent className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                    Our Story
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Founded in 2018, Love Regality Productions emerged from a simple belief: 
                        every brand has a unique story worth telling. We specialize in creating 
                        commercials that don't just sell products, but build emotional connections 
                        between brands and their audiences.
                      </p>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Our approach combines cutting-edge technology with timeless storytelling 
                        principles. We believe that the best commercials are the ones people 
                        actually want to watch, share, and remember.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-brand-orange to-brand-blue p-6 rounded-lg text-white">
                        <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                        <p className="text-lg opacity-90">
                          To create visual content that not only captures attention but also 
                          drives meaningful engagement and lasting brand impact.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-3xl font-bold text-brand-orange">150+</div>
                          <div className="text-sm text-muted-foreground">Projects</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-brand-blue">50+</div>
                          <div className="text-sm text-muted-foreground">Clients</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-brand-green">5</div>
                          <div className="text-sm text-muted-foreground">Years</div>
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
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Meet Our <span className="text-brand-green">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground">
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
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl font-bold text-muted-foreground">
                          {client.name.slice(0, 2)}
                        </span>
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