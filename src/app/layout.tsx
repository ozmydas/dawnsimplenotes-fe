import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import hash_token from "@/lib/hasher";
import MetaClient from "./meta_client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damn Simple Notes",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const getToken = await hash_token() ?? "";

  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}

      <body>
        <MetaClient apptoken={getToken} />
        <div className="main-bg">
          <img src="/images/ItalyClock.jpg" />
        </div>

        <div className="blursed">blurrrr</div>

        <div className="main-container">
          <Header />

          {children}

        </div>
      </body>
    </html>
  );
}
