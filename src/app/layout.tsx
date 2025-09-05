import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Navigation from "@/components/nav";
import Footer from "@/components/footer";
import WhatsAppWidget from "@/components/WhatsappWidget";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights you need
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Novaddi",
  description: "More Than a Pharmacy. Where Medicine Meets Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased bg-white font-inter`}
      >
        <Navigation />
        {children}
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
