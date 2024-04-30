import "./globals.css";

import { Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import * as m from "@/paraglide/messages.js";
import { languageTag } from "@/paraglide/runtime.js";
import { LanguageProvider } from "@inlang/paraglide-next";
import { ScrollToTop } from "@/components/ScrollToTop";

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
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <Navbar />
            <div className="bg-background">{children}</div>

            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </body>
      </html>
    </LanguageProvider>
  );
}
