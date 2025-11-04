
import "./globals.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/magnific-popup.min.css";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { useSessionState } from "@/stores/use-userstate";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = useSessionState();
  // useEffect(() => {
  //    session.initializeUser();
  // }, []);
  // useEffect(() => {
  //   if (document.querySelector('#my-runtime-script')) {
  //     return;
  //   }
  //   const script = document.createElement('script');
  //   script.src = '/assets/js/main.js'; 
  //   script.id = 'my-runtime-script'; 
  //   script.onload = () => {
  //     console.log('my-runtime-script.js has loaded and executed!');
  //   };
  //   document.body.appendChild(script);
  // }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mos-Engineering Industrial & Electrical Services"
        />
        <meta
          name="keywords"
          content="Mos-Engineering, industrial, electrical, automation, solar, engineering, mining, PLC, HMI, SCADA"
        />
        <title>Mos-Engineering Industrial & Electrical Services</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
       <>{children}</>
        <Script src="/assets/js/vendor/jquery-3.7.1.min.js"></Script>
        <Script src="/assets/js/swiper-bundle.min.js"></Script>
        <Script src="/assets/js/bootstrap.min.js"></Script>
        <Script src="/assets/js/jquery.magnific-popup.min.js"></Script>
        <Script src="/assets/js/jquery.counterup.min.js"></Script>
        <Script src="/assets/js/circle-progress.js"></Script>
        <Script src="/assets/js/jquery-ui.min.js"></Script>
        <Script src="/assets/js/imagesloaded.pkgd.min.js"></Script>
        <Script src="/assets/js/isotope.pkgd.min.js"></Script>
        <Script src="/assets/js/nice-select.min.js"></Script>
        <Script src="/assets/js/wow.min.js"></Script>
        <Script src="/assets/js/gsap.min.js"></Script>
        <Script src="/assets/js/ScrollTrigger.min.js"></Script>
        <Script src="/assets/js/SplitText.min.js"></Script>
        <Script src="/assets/js/lenis.min.js"></Script>
        <Script src="/assets/js/main.js"></Script>
      </body>
    </html>
  );
}
