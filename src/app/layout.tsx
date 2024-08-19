import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
