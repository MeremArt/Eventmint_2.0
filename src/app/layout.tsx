import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Mint",
  description: "Event Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Eventmint</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔨</text></svg>"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist&display=swap"
          rel="stylesheet"
        />

        <meta property="og:url" content="eventmint.xyz" />
        <meta property="og:title" content="Event Management System" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1719802304/event-logo_iyl1ec.png"
        />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
