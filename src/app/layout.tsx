import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata = {
  title: "Tripviu",
  description: "Halal-friendly stays. For everyone.",
  icons: { icon: "/favicon.svg" }
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} antialiased bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  );
}
