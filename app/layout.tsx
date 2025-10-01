import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.servanisafetynets.com"), // <-- set your site URL here
  title: {
    default: "Servanisafety Nets",
    template: "%s | Servanisafety Nets",
  },
  description: "A trusted provider of high-quality safety nets designed to ensure security, protect from birds, and enhance safety for kids and construction sites. Offering reliable solutions for a variety of safety needs with professional services.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.servanisafetynets.com",
    siteName: "Servanisafety Nets",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
