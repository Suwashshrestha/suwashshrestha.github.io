"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Wrench, Heart } from "lucide-react";

const SkillIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "Frontend":
      return <Code className="h-5 w-5" />;
    case "Backend":
      return <Server className="h-5 w-5" />;
    case "Tools":
      return <Wrench className="h-5 w-5" />;
    case "Soft Skills":
      return <Heart className="h-5 w-5" />;
    default:
      return <Code className="h-5 w-5" />;
  }
};

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-3xl">
            I've developed a diverse skill set across various technologies, 
            allowing me to tackle complex problems and build comprehensive solutions.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          {SKILLS.map((skillGroup, index) => (
            <Card 
              key={index} 
              className="border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">{skillGroup.category}</CardTitle>
                <div className="text-primary bg-primary/10 p-2 rounded-full">
                  <SkillIcon category={skillGroup.category} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skillGroup.items.map((skill, skillIndex) => {
                    // Different styles based on category for visual interest
                    let variant = "default";
                    if (skillGroup.category === "Frontend") variant = "secondary";
                    if (skillGroup.category === "Backend") variant = "outline";
                    if (skillGroup.category === "Tools") variant = "secondary";
                    
                    return (
                      <Badge 
                        key={skillIndex} 
                        variant={variant as any}
                        className="text-xs py-1"
                      >
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
}