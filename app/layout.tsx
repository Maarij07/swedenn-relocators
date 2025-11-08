import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sweden Relocators - Expert Relocation Services",
  description: "Comprehensive relocation and immigration support for individuals, employees, and companies moving to Sweden, Denmark, and the Nordic region.",
  keywords: "Sweden relocation, immigration support, residence permits, housing Sweden, school placement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}