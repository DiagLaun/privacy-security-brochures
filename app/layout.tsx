import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Privacy & Security Brochures",
    template: "%s | Privacy & Security Brochures",
  },
  description:
    "Brochure-style learning content covering privacy and security fundamentals — passwords, phishing, 2FA, safe browsing, data privacy, device security, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
