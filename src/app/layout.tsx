import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://americandream.com"),
  title: "American Dream | The World's Premier Retail & Entertainment Destination",
  description:
    "An immersive, interactive sales experience for partners, tenants, and event promoters at American Dream Mall.",
  keywords: [
    "American Dream Mall",
    "luxury retail",
    "events",
    "entertainment destination",
    "New Jersey",
    "tenant partnerships",
  ],
  authors: [{ name: "American Dream Commerce Team", url: "https://americandream.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "American Dream Live",
    title: "American Dream | The World's Premier Retail & Entertainment Destination",
    description:
      "An immersive sales experience that introduces American Dream Mall’s scale, luxury retail, entertainment, dining, and event capabilities.",
    url: "https://americandream.com",
    images: [
      {
        url: "https://americandream.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "American Dream Mall luxury retail and entertainment spaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "American Dream | World-Class Retail & Entertainment",
    description:
      "Explore partner opportunities at American Dream Mall—luxury retail, entertainment, dining, and events combined inside one platform.",
    images: ["https://americandream.com/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  other: {
    "geo.region": "US-NJ",
    "geo.placename": "East Rutherford",
    "geo.position": "40.8135;-74.0700",
    ICBM: "40.8135,-74.0700",
  },
};

export const viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`no-scrollbar ${inter.variable} ${outfit.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
