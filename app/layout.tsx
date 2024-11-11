import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ModeToggle } from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michele Di Stadio Portfolio",
  description: "Modern and minimalist portfolio of Michele Di Stadio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="relative min-h-screen"> {/* Ensure this div is relatively positioned */}
            <ModeToggle /> {/* Mode toggle positioned here */}
            {children} {/* Your main content */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
