import type { Metadata } from "next";
import "./globals.css";
import Header from "../elements/header/header";
import Navigation from "../elements/navigation/navigation.tsx";

export const metadata: Metadata = {
  title: "NextEp",
  description: "The Next Step",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header className="header_margin"/>
        <Navigation>
          <main className="bg-primaryProject">
            <div className="content-margin align-content flex flex-col">
              {children}
            </div>
          </main>
        </Navigation>
      </body>
    </html>
  );
}
