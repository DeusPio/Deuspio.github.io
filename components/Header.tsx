"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { site } from "@/data/site";

const links = [
  { href: "#about", en: "About", zh: "关于" },
  { href: "#skills", en: "Skills", zh: "技能" },
  { href: "#projects", en: "Projects", zh: "项目" },
  { href: "#favorites", en: "Favorites", zh: "喜好" },
  { href: "#now", en: "Now", zh: "近况" },
  { href: "#blog", en: "Blog", zh: "动态" },
  { href: "#contact", en: "Contact", zh: "联系" },
];

export function Header() {
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-bar">
        <a className="nav-brand" href="#home">
          {site.title}
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive ? "is-active" : ""}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-dot" aria-hidden="true" />
                  <span className="en">{link.en}</span>
                  <span className="zh">{link.zh}</span>
                </a>
              </li>
            );
          })}
          <li>
            <button className="lang-toggle" type="button" onClick={toggleLang}>
              {lang === "en" ? "中文" : "EN"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
