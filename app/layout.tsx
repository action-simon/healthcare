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
          <main className="flex min-h-screen flex-col">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <Toaster />
              <div className="flex-1 bg-background">{children}</div> <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </main>
        </body>
      </html>
    </LanguageProvider>
  );
}
