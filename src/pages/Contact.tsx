import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    phone: ""
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create email message
    const emailSubject = `New Project Inquiry from ${formData.name}`;
    const emailBody = `Hi Love Regality Productions! I'm interested in working with you.

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.company ? `Company: ${formData.company}` : ''}

Project Information:
${formData.projectType ? `Project Type: ${formData.projectType}` : ''}
${formData.budget ? `Budget Range: ${formData.budget}` : ''}

Message:
${formData.message}

Looking forward to hearing from you!`;

    // Create mailto URL
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
    const emailAddress = "hello@loveregalityproductions.com";
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open email client
    window.location.href = mailtoUrl;

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
      phone: ""
    });

    toast({
      title: "Success!",
      description: "Opening your email client to send the message.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@loveregalityproductions.com",
      action: "mailto:hello@loveregalityproductions.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Los Angeles, CA",
      action: null
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Chat with us",
      action: "https://wa.me/1234567890"
    }
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
                  <span className="text-muted-foreground">Home</span>
                </Link>
              </Button>
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-orange-400 to-blue-400 bg-clip-text text-transparent animate-color-shift">
                Get in Touch
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
                Ready to bring your vision to life? Let's discuss your project and create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-xl backdrop-blur-xl bg-white/10 border border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-color-shift">
                      Tell us about your project
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours via email.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type</Label>
                          <Input
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            placeholder="Commercial, Corporate, etc."
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Input
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            placeholder="$5k - $10k, $10k - $25k, etc."
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Send Message via Email
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-color-shift">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-brand-orange" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-muted-foreground">
                              {info.title}
                            </h3>
                            {info.action ? (
                              <a
                                href={info.action}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                                target={info.action.startsWith('http') ? '_blank' : undefined}
                                rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.content}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-gradient-to-br from-brand-orange/10 to-brand-green/10">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent animate-color-shift">
                      Why Choose Us?
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 24-hour response time</li>
                      <li>• Free initial consultation</li>
                      <li>• Flexible payment options</li>
                      <li>• Full-service production</li>
                      <li>• Award-winning team</li>
                      <li>• Unlimited revisions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;