import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
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
    <html lang="vi" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#212529]">
        {children}
      </body>
    </html>
  );
}
