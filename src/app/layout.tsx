import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makrand Ghodke | Machine Learning & AI Engineer",
  description:
    "M.Sc. ICE student at TU Darmstadt building machine learning systems that work outside the notebook. Computer vision, vector search, and full-stack engineering.",
  keywords: [
    "Makrand Ghodke",
    "TU Darmstadt",
    "Machine Learning",
    "Computer Vision",
    "CLIP",
    "FAISS",
    "PyTorch",
    "Next.js",
    "Werkstudent",
    "HiWi",
    "Darmstadt",
  ],
  authors: [{ name: "Makrand Ghodke" }],
  creator: "Makrand Ghodke",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://makrandghodke.vercel.app",
    title: "Makrand Ghodke | Machine Learning & AI Engineer",
    description:
      "M.Sc. ICE student at TU Darmstadt building machine learning systems that work outside the notebook.",
    siteName: "Makrand Ghodke Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makrand Ghodke | Machine Learning & AI Engineer",
    description:
      "M.Sc. ICE student at TU Darmstadt building machine learning systems that work outside the notebook.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-text font-sans antialiased selection:bg-accent/20 selection:text-accent">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col bg-tech-grid">
            <Navbar />
            <main className="flex-1 w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
