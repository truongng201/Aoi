import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
});


export const metadata = {
  title: "A Oi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
