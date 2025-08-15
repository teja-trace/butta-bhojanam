export const metadata = {
  title: "Butta Bhojanam — Fresh, Healthy Meals Delivered",
  description: "Thistle-inspired meal delivery UI built with Next.js and Tailwind.",
};

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
