"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { EXPERIENCES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Briefcase, Calendar, Quote } from "lucide-react";

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Experience
          </div>
          
          <div className="h-1 w-20 bg-primary/50 rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-3xl">
            Over the years, I've gained valuable experience working with various teams and projects.
            Here's a timeline of my professional journey.
          </p>
        </div>

        {/* Experience Timeline */}
        <div 
          ref={timelineRef}
          className="relative max-w-3xl mx-auto mb-24 pl-8 border-l border-border"
          style={{
            opacity: timelineInView ? 1 : 0,
            transition: "opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          {EXPERIENCES.map((experience, index) => (
            <div 
              key={index} 
              className="mb-12 relative"
              style={{
                transform: timelineInView ? "none" : "translateY(40px)",
                opacity: timelineInView ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 + index * 0.1}s`
              }}
            >
              <div className="absolute -left-12 mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/30">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              {/*  */}
              <div className="mb-2 flex flex-wrap items-baseline">
                <h3 className="text-xl font-bold mr-2">{experience.position}</h3>
                <span className="text-primary">@ {experience.company}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{experience.duration}</span>
              </div>
              <p className="text-muted-foreground">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
}