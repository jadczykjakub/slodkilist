import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import style from "./Layout.module.scss";

const domine = Poppins({ subsets: ["latin"], weight: ["700", "400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${style.layout} ${domine.className} `}>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
