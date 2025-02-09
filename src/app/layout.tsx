import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationHeader from "@wyrd/components/navigation_header";
import Footer from "@wyrd/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wyrd: Speed dating app for working professionals",
  description: "Wyrd is a next-gen speed dating app designed for real, in-the-moment connections. Skip the endless swiping—meet singles in fun, fast-paced dating sessions that spark genuine chemistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
