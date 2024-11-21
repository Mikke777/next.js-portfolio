"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme;
      } else {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDarkScheme ? "dark" : "light";
      }
    }
    return "light";
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)").matches;
      const initialTheme = prefersDarkScheme ? "dark" : "light";
      setTheme(initialTheme);
      localStorage.setItem("theme", initialTheme);
    }
  }, []);

  return (
    <html lang="en" className={theme} style={{ colorScheme: theme }} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
