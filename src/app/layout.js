import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/muslimbek/Footer";
import Navbar from "@/components/Navbar";

const creatball = localFont({ src: "../Creatball-Regular.ttf" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${creatball.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
