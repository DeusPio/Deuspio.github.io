import { Bilingual } from "@/components/Bilingual";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        <Bilingual
          en={`© ${year} ${site.title}. Built with Next.js.`}
          zh={`© ${year} ${site.title}。由 Next.js 构建。`}
        />
      </p>
    </footer>
  );
}
