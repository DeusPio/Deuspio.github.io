import { getPostBySlug, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <article className="post section">
      <a className="back-link" href="/#blog">
        <span className="en">&larr; Back to Blog</span>
        <span className="zh">&larr; 返回动态</span>
      </a>
      <h1>{post.title}</h1>
      <p className="post-date">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
