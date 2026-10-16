import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import clsx from "clsx";
import Providers from "@/components/motion/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/config/site";
import "./globals.css";

// next/font loads every weight/style combination listed, so this also
// includes italic 500 and 600 alongside the requested italic 400.
const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: `%s | ${site.name}`,
    default: `${site.name} | Boutique stays in ${site.location.island}`,
  },
  description: `A boutique resort in ${site.location.area}, ${site.location.island}. Ocean-view villas, slow mornings and island experiences.`,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(display.variable, body.variable, "h-full antialiased")}
    >
      <body className="flex min-h-full flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
