import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday Khushi! ✨ | From Bhavya",
  description: "A personalized, interactive digital birthday celebration for Khushi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#FAF7F2] text-[#2D2D2D] selection:bg-[#F5E6E8] selection:text-[#C56868]">
        {children}
      </body>
    </html>
  );
}
