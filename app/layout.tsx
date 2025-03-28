import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import './globals.css'
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({subsets:["latin"]}); // This is the importation form the typography.

export const metadata: Metadata = {
  title: "Rodrigo Ramirez Portfolio",
  description: "Portfolio made by Rodrigo Ramirez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className} // This is how typography is used in every body. Antialised is used to soften the edges of fonts. 
      > 
        <Navbar></Navbar>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
