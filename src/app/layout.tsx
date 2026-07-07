import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-sans-vn",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinfast Kim Sơn Long Bình Đồng Nai",
  description:
    "Vinfast Kim Sơn Long Bình Biên Hòa Đồng Nai | Đại Lý VinFast tại Đồng Nai 643 QL1A, Kp2, Long Bình, Đồng Nai. Chương trình khuyến mãi năm 2026.",
  keywords: ["vinfast đồng nai", "vinfast biên hòa"],
  openGraph: {
    type: "website",
    title: "Vinfast Kim Sơn Long Bình Đồng Nai",
    description:
      "Vinfast Kim Sơn Long Bình Biên Hòa Đồng Nai | Đại Lý VinFast tại Đồng Nai 643 QL1A, Kp2, Long Bình, Đồng Nai.",
    siteName: "Vinfast Kim Sơn Long Bình Đồng Nai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-800">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
