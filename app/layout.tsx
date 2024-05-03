import "./globals.css";

import * as m from "@/paraglide/messages.js";

import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@inlang/paraglide-next";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { languageTag } from "@/paraglide/runtime.js";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: m.home_metadata_title(),
    description: m.home_metadata_description(),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang={languageTag()}>
        <body
          className={`${inter.className} flex min-h-screen flex-col bg-background text-foreground`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-1">{children}</main>
            <ScrollToTop />
            <Toaster />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </LanguageProvider>
  );
}
