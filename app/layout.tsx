// app/layout.tsx
import BackToTop from "@/components/BackToTop";
import "./globals.css";

import ScrollToTop from "@/components/BackToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-black text-white">
        <BackToTop />
        {children}
      </body>
    </html>
  );
}
