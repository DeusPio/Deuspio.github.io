import type { Metadata } from "next";
import { Young_Serif, Nunito, Space_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/Starfield";
import { site } from "@/data/site";
import "./globals.css";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${site.title} — ${site.description}`,
  description: site.description,
};

const setInitialLang = `
(function () {
  try {
    var saved = window.localStorage.getItem('siteLang');
    if (saved === 'zh') {
      document.documentElement.setAttribute('data-lang', 'zh');
      document.documentElement.setAttribute('lang', 'zh');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-lang="en"
      suppressHydrationWarning
      className={`${youngSerif.variable} ${nunito.variable} ${spaceMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialLang }} />
      </head>
      <body>
        <LanguageProvider>
          <Starfield />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
