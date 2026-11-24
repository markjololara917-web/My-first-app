import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markjolo Lara | Personal Site",
  description: "A personal site built with Next.js",
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