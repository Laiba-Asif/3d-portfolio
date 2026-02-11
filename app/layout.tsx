import type { Metadata } from "next";
import "./globals.css";
import { Black_Ops_One, Pirata_One } from "next/font/google";


const blackOps = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-black-ops",
});

const pirata = Pirata_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pirata",
});
// import { Analytics } from "@vercel/analytics/next"
import ContactForm from "@/components/Contact";
import Navbar from "@/components/Layouts/Navbar";

export const metadata: Metadata = {
  title: "Laiba Awan | MERN Stack Developer",
  description: "Laiba Asif's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head  lang="en" className={`${blackOps.variable} ${pirata.variable}`}>
     {/* google verifiction link */}
      {/* <meta name="google-site-verification" content="T6KEfvY5mg61yDcFbDKpQCYP_4-yBhpBp51u4_IQn20" /> */}
      </head>
      <body >
        {/* <Analytics/> */}
        <Navbar />
        {children}
        <ContactForm />
      </body>
    </html>
  );
}