import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BB TRUCK ZONE",
  description: "Generated by BB TRUCK ZONE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
