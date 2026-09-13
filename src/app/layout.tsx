import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kỳ Tốc Academy | Học trên đơn thật — Làm trên tuyến Trung-Việt",
  description: "Đào tạo nghiệp vụ Supply Chain, Logistics và Mua hàng bằng quy trình thực chiến.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground pb-16 lg:pb-0">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
