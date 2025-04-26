"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";
import { ArrowDownCircle, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/10 pointer-events-none" />
      <div 
        className={`container mx-auto px-4 py-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6">
           
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <div className="flex items-center space-x-3">
              <div className="h-1 w-12 bg-primary rounded-full" />
              
              <span className="block text-primary">Hi, I'm Suwash Shrestha</span>
            </div>
            
              
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="#projects">View Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            
            <div className="flex space-x-5 pt-2">
              <Link href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/20 backdrop-blur-sm border border-border shadow-xl">
              <div className="absolute inset-0 mix-blend-overlay opacity-90">
                <img
                  src="suwash.jpg"
                  alt="Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="h-10 w-10 text-primary/70 hover:text-primary transition-colors" />
        </Link>
      </div>
    </section>
  );
}