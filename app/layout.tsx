import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My First App",
  description: "My first Next.js website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link className="nav-button" href="/">Home</Link>
          <Link className="nav-button" href="/about">About</Link>
          <Link className="nav-button" href="/projects">Projects</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}