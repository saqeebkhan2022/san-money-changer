import type { Metadata } from "next";
import Footer from "@/src/components/Footer";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "San Money Changers | Fast & Secure Currency Exchange",
  description:
    "Official San Money Changers Pvt Ltd. Get real-time exchange rates and professional forex services in Delhi.",
  icons: {
    icon: "/logo.jpeg", // This sets your logo as the favicon (tab icon)
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
