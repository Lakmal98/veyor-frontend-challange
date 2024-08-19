import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "Veyor Wellness",
  description: "Veyor Wellness Booking System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://cdn.prod.website-files.com/5f20dd9716bf5a5de6424bbf/5f2a4d367e66349949057c5a_favicon-32x32-v02.png"
          sizes="any"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
