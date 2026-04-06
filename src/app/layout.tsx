import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import { RequestForm } from "@/components/request-form";
import { Card } from "@/components/ui/card";
import "./globals.css";

export const metadata: Metadata = {
  title: "JK Hospital",
  description: "The Best Medical and Treatment Center for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NC6GCGRQ');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NC6GCGRQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="bg-background min-h-screen text-foreground font-sans">
          <TopBar />
          <main>{children}</main>
          <section className="bg-background py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <Card className="shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-2">
                        Leave Your Feedback
                        </h2>
                        <p className="text-foreground/70 mb-6">
                        We value your opinion. Fill out the form and our team will get back to you.
                        </p>
                    </div>
                    <div className="max-w-lg mx-auto">
                        <RequestForm />
                    </div>
                </div>
                </Card>
            </div>
          </section>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}