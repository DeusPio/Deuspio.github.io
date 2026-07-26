import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function readSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return readSlugs()
    .map((slug) => {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  return readSlugs();
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const contentHtml = marked.parse(content, { async: false }) as string;
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    contentHtml,
  };
}
