import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

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
    <html lang="en" data-lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialLang }} />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
