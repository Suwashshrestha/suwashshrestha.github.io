"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PERSONAL_INFO, EDUCATION } from "@/lib/constants";
import { GraduationCap, BookOpen, Award, Clock } from "lucide-react";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-3xl">
            I'm a passionate full-stack developer with a strong focus on creating clean, 
            efficient, and user-friendly applications. With a keen eye for detail and a 
            love for problem-solving, I strive to deliver exceptional digital experiences.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-tr from-primary/5 to-secondary/10 border border-border shadow-lg">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">{PERSONAL_INFO.name}</h3>
              <p className="text-primary font-medium mb-4">{PERSONAL_INFO.title}</p>
              <p className="text-muted-foreground mb-4">
                Based in {PERSONAL_INFO.location}, I specialize in building modern web applications
                that deliver exceptional user experiences.
              </p>
              <div className="grid grid-rows-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Email:</p>
                  <p className="font-medium">{PERSONAL_INFO.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone:</p>
                  <p className="font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground">
              With several years of experience in web development, I've worked on a diverse 
              range of projects that have allowed me to refine my skills and expand my knowledge. 
              My passion for learning keeps me at the forefront of emerging technologies and best practices.
            </p>
            
            <h4 className="text-xl font-semibold">Education & Certifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDUCATION.map((edu, index) => (
                <Card key={index} className="border border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {index === 0 ? (
                        <GraduationCap className="h-5 w-5 text-primary" />
                      ) : (
                        <BookOpen className="h-5 w-5 text-primary" />
                      )}
                      <h5 className="font-semibold">{edu.degree}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{edu.duration}</span>
                    </div>
                    <p className="text-sm">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}