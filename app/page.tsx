import { Bilingual } from "@/components/Bilingual";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { favorites } from "@/data/favorites";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, site.recentPostsCount);

  return (
    <>
      <section id="home" className="hero">
        <h1>{site.title}</h1>
        <p className="tagline">
          <Bilingual en={site.tagline.en} zh={site.tagline.zh} />
        </p>
      </section>

      <section id="about" className="section">
        <h2>
          <Bilingual en="About" zh="关于我" />
        </h2>
        {/* EDIT ME: write your own bio here */}
        <p>
          <Bilingual
            en="I build things for the web, for the desktop, and inside game engines. This is my little corner of the internet."
            zh="我喜欢做网页、软件和游戏相关的东西，这里是属于我的一小片网络角落。"
          />
        </p>
      </section>

      <section id="skills" className="section">
        <h2>
          <Bilingual en="Skills" zh="技能" />
        </h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.labelEn}>
              <h3>
                <Bilingual en={group.labelEn} zh={group.labelZh} />
              </h3>
              <ul className="chip-list">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>
          <Bilingual en="Projects" zh="项目" />
        </h2>
        <div className="card-grid">
          {projects.map((project) => (
            <a className="card" href={project.link} key={project.title}>
              <h3>{project.title}</h3>
              <p>
                <Bilingual en={project.descEn} zh={project.descZh} />
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="favorites" className="section">
        <h2>
          <Bilingual en="Favorites" zh="我的喜好" />
        </h2>
        <div className="card-grid">
          {favorites.map((fav) => (
            <div className="card" key={fav.categoryEn}>
              <h3>
                <Bilingual en={fav.categoryEn} zh={fav.categoryZh} />
              </h3>
              <p className="fav-name">{fav.name}</p>
              <p>
                <Bilingual en={fav.commentEn} zh={fav.commentZh} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="now" className="section">
        <h2>
          <Bilingual en="Now" zh="近况" />
        </h2>
        {/* EDIT ME: update this whenever what you're working on changes */}
        <p>
          <Bilingual
            en="🚧 Currently building this very website."
            zh="🚧 目前正在搭建这个网站。"
          />
        </p>
      </section>

      <section id="blog" className="section">
        <h2>
          <Bilingual en="Blog" zh="动态" />
        </h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li className="post-item" key={post.slug}>
              <a href={`/blog/${post.slug}/`}>{post.title}</a>
              <span className="post-date">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>
          <Bilingual en="Contact" zh="联系方式" />
        </h2>
        <ul className="contact-list">
          <li>
            <a href={`mailto:${site.email}`}>✉️ {site.email}</a>
          </li>
          <li>
            <a
              href={`https://github.com/${site.githubUsername}`}
              target="_blank"
              rel="noopener"
            >
              🐙 GitHub / {site.githubUsername}
            </a>
          </li>
          <li>💬 WeChat / {site.wechatId}</li>
        </ul>
      </section>
    </>
  );
}
