import "./globals.css";
//main layout file
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://suwashshrestha.com.np'),
  title: {
    default: "Suwash Shrestha | Full Stack Developer",
    template: "%s | Suwash Shrestha"
  },
  description: "Full Stack Developer specializing in React, Node.js, and modern web applications. Portfolio showcasing projects, skills, and professional experience.",
  keywords: [
    "Suwash Shrestha",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Next.js",
    "Portfolio",
    "Software Engineer"
  ],
  creator: "Suwash Shrestha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suwashshrestha.com.np",
    title: "Suwash Shrestha | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and modern web applications",
    siteName: "Suwash Shrestha Portfolio",
    images: [{
      url: "/og-image.jpg", // Make sure to add this image in your public folder
      width: 1200,
      height: 630,
      alt: "Suwash Shrestha - Full Stack Developer"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suwash Shrestha | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and modern web applications",
    creator: "@YourTwitterHandle", // Replace with your Twitter handle
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code", // Optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}