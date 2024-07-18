import type { Metadata } from "next";
import {
  Inter,
  Lato,
  Roboto,
  Open_Sans,
  Fira_Code, 
} from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

const GradientCursor = dynamic(() => import('./components/gradientcursor'), {
  ssr: false
});

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const firaCode = Fira_Code({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata: Metadata = {
  title: "Godwin Kumahor",
  description: "Godwin Kumahor's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body className={firaCode.className} style={{ height: "100%", margin: 0 }}>
        <GradientCursor />
        <div style={{ minHeight: "100vh" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
