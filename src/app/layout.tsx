import type { Metadata } from "next";
import "./globals.css";
import Header from "../elements/header/header";
import Navigation from "../elements/navigation/navigation";
import Footer from "../elements/footer/footer";
import Script from "next/script";

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
<head>
  <Script
    id="gtm-script"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NXZGXFKQ');
      `
    }}
  />
</head>
      <body
        className={`antialiased`}
      >

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXZGXFKQ"
height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>

        <Header />
        <Navigation>
          <main className="bg-primaryProject flex flex-col items-stretch min-h-screen">
            <div className="align-content flex flex-col gap-[24px] flex-grow mb-[24px]">
              {children}
            </div>
            <Footer />
          </main>
        </Navigation>
      </body>
    </html>
  );
}
