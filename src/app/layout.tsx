import type { Metadata } from "next";
import "./globals.css";
import Header from "../elements/header/header";
import Navigation from "../elements/navigation/navigation";
import Footer from "../elements/footer/footer";

export const metadata: Metadata = {
  title: "NextEp | Digital Services, Projects & Web Solutions",
  description: "Explore NextEp's digital services—websites, apps, AI tools, SEO & APIs. View our projects and get in touch to grow your online presence today.",
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
          <main className="bg-primaryProject flex flex-col items-stretch min-h-screen">
            <div className="align-content flex flex-col gap-[24px] flex-grow mb-[24px]">
              {children}
            </div>
            <Footer/>
          </main>
        </Navigation>
      </body>
    </html>
  );
}
