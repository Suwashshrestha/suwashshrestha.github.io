"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  };
  
  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };
  
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-3xl">
            Here's a selection of my recent work that showcases my skills
            and approach to solving complex problems.
          </p>
        </div>

        {/* Featured Project Carousel for larger screens */}
        <div className="hidden lg:block relative overflow-hidden rounded-xl shadow-lg border border-border mb-20">
          <div
            className="flex transition-transform duration-500 ease-in-out h-[600px]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {PROJECTS.map((project, index) => (
              <div key={index} className="min-w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50 z-10" />
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                <div className="relative z-20 h-full flex items-end p-10">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button asChild>
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={prevProject}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={nextProject}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Grid view for all projects */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          {PROJECTS.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden border border-border bg-card/30 backdrop-blur-sm hover:shadow-lg transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs py-0">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs py-0">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-3">
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="ghost" className="w-full">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}