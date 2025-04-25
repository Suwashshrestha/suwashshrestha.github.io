"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-provider";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for header background
      setIsScrolled(window.scrollY > 20);

      // Find active section
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="#home"
          className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          Suwash.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeSection === item.href.substring(1)
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              )}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild size="sm" className="ml-4">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-lg shadow-md border-b border-border">
            <nav className="flex flex-col py-4 px-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 rounded-md font-medium transition-colors",
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="sm" className="mt-4 w-full">
                <Link href="#contact" onClick={closeMenu}>Get in touch</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}