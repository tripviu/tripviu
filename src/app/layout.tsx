import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tripviu — Halal-friendly stays for everyone",
  description: "Discover and book halal-friendly hotels worldwide. Filters for halal food, no alcohol, prayer spaces and more.",
  metadataBase: new URL("https://tripviu.com"),
  openGraph: {
    title: "Tripviu — Halal-friendly stays for everyone",
    description: "Discover and book halal-friendly hotels worldwide.",
    url: "https://tripviu.com",
    siteName: "Tripviu",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Tripviu" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripviu — Halal-friendly stays for everyone",
    description: "Discover and book halal-friendly hotels worldwide.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
