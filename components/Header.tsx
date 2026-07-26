"use client";

import { useState } from "react";
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
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                <span className="en">{link.en}</span>
                <span className="zh">{link.zh}</span>
              </a>
            </li>
          ))}
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
