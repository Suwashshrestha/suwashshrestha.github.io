"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-3xl">
            Feel free to reach out if you're looking to collaborate, have a project in mind,
            or just want to connect. I'm always open to new opportunities.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border border-border overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Don't hesitate to get in touch. I'm always eager to hear about new projects and opportunities.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary/10 p-2.5 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary/10 p-2.5 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary/10 p-2.5 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Map or illustration */}
            
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-card/50 backdrop-blur-sm border border-border overflow-hidden h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                
                {isSubmitted ? (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center bg-primary/20 p-3 rounded-full mb-4">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Message Sent Successfully!</h4>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}