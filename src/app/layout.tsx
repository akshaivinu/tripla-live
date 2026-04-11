import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "American Dream | The World's Premier Retail & Entertainment Destination",
  description: "An immersive, interactive sales experience for partners, tenants, and event promoters at American Dream Mall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body>
        {children}
      </body>
    </html>
  );
}
