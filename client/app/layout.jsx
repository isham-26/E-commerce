import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ShopContextProvider } from "./context/ShopContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ShopContextProvider>{children}</ShopContextProvider>
        <Footer />
      </body>
    </html>
  );
}
