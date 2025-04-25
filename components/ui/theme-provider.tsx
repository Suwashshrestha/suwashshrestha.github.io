"use client";

import * as React from "react";
import { useTheme, ThemeProvider as NextThemesProvider } from "next-themes";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      {children}
    </NextThemesProvider>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    console.log("ThemeToggle mounted");
  }, []);

  if (!mounted) {
    return null; // Prevent rendering until mounted to avoid hydration mismatch
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        console.log(`Toggling theme from ${theme} to ${newTheme}`);
        setTheme(newTheme);
      }}
      className="rounded-full w-9 h-9"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}