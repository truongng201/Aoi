import { Montserrat } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const myFont = localFont({
  src: '../fonts/1FTV-HF-Gesco.ttf',
  display: 'swap',
})

export const metadata = {
  title: "A Oi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`+`${myFont.className}`}>
        {children}
      </body>
    </html>
  );
}
