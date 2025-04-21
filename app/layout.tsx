import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Suwash Suwash",
  description: "Personal portfolio of Suwash Shrestha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}