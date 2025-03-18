import type { Metadata } from "next";
import "./globals.css";
import Header from "../elements/header/header";
import Navigation from "../elements/navigation/navigation";
import Footer from "../elements/footer/footer";

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
        <Header/>
        <Navigation>
          <main className="bg-primaryProject">
            <div className="align-content flex flex-col gap-[24px] h-[90vh]">
              {children}
            </div>
            <Footer/>
          </main>
        </Navigation>
      </body>
    </html>
  );
}
