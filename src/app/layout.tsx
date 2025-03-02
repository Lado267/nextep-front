import type { Metadata } from "next";
import "./globals.css";
import Header from "../elements/header.tsx";

export const metadata: Metadata = {
  title: "NextEp",
  description: "The Next Step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <main className="bg-primaryProject">
          {children}
        </main>
      </body>
    </html>
  );
}
