import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/Toaster";
// import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arowolo Health Foundation — Ending Tuberculosis",
  description:
    "Arowolo Health Foundation is dedicated to the eradication of Tuberculosis. We provide testing, treatment, and nutritional support to vulnerable patients.",
  applicationName: "Arowolo Health Foundation",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased app-bg min-h-dvh`}
      >
        {/* <AuthProvider> */}
          <div className="min-h-dvh flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
