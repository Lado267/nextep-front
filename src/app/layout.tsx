import type { Metadata } from "next";
import "./globals.css";
import Header from "../elements/header/header";
import Navigation from "../elements/navigation/navigation";
import Footer from "../elements/footer/footer";
import Script from "next/script";

export const metadata: Metadata = {
  icons: {
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXZGXFKQ"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {/* Google Tag Manager */}
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

        <Header />
        <Navigation>
          <main className="bg-primaryProject flex flex-col items-stretch h-full w-[100vw] pt-[8px]">
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