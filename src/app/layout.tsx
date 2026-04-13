import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "American Dream | The World's Premier Retail & Entertainment Destination",
  description:
    "An immersive, interactive sales experience for partners, tenants, and event promoters at American Dream Mall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`no-scrollbar ${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
