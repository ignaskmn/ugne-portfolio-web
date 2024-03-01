import type { Metadata } from "next";
import { Courier_Prime, Inconsolata, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { draftMode } from "next/headers";
import AdminBar from "./_components/AdminBar";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const serif = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const sans = Roboto_Mono({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-sans",
});

const mono = Inconsolata({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ugnė Makselytė",
  description: "Gyvenimas per brangus svetainė",
  metadataBase: new URL("https://ugnemakselyte.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = draftMode();

  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} ${mono.variable} font-serif bg-black text-white`}
      >
        <div className="flex justify-center w-full px-4 my-4">
          <h2 className="text-white text-2xl underline underline-offset-8 decoration-yellow-400">
            Website is being updated, check back soon
          </h2>
        </div>
        <Header />
        {isDraftMode && <AdminBar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
