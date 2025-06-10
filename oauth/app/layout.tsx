import { NavBar } from "@/components/navbar";
import { getSession } from "@/lib/actions";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
  style: "normal",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeQR OAuth Flow Demo",
  description:
    "Learn how to use CodeQR OAuth to integrate dynamic QR codes, branded short links, landing pages, and comprehensive analytics into your applications.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={`${inter.className} ${satoshi.variable}`}>
        <Toaster
          closeButton
          toastOptions={{
            // @ts-ignore
            classNames: {
              closeButton: "bg-white",
            },
          }}
        />
        <div className="relative z-10">
          <NavBar user={session?.user} />
          <div className="mx-auto flex flex-col items-center w-full max-w-screen-md">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
