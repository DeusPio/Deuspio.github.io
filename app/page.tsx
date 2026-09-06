import { Bilingual } from "@/components/Bilingual";
import { Reveal } from "@/components/Reveal";
import { Campfire } from "@/components/Campfire";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { favorites } from "@/data/favorites";
import { getAllPosts } from "@/lib/posts";

function Eyebrow({ en, zh }: { en: string; zh: string }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-dot" aria-hidden="true" />
      <Bilingual en={en} zh={zh} />
    </p>
  );
}

export default function Home() {
  const posts = getAllPosts().slice(0, site.recentPostsCount);

  return (
    <>
      <section id="home" className="hero">
        <p className="hero-eyebrow">
          <Bilingual en="Currently orbiting Earth" zh="目前正绕地球轨道运行" />
        </p>
        <h1>{site.title}</h1>
        <p className="tagline">
          <Bilingual en={site.tagline.en} zh={site.tagline.zh} />
        </p>
        <a className="scroll-cue" href="#about">
          <span className="en">Keep exploring</span>
          <span className="zh">继续探索</span>
          <span className="scroll-cue-arrow" aria-hidden="true" />
        </a>
      </section>

      <section id="about" className="section">
        <Reveal>
          <Eyebrow en="Point of interest" zh="兴趣点" />
          <h2>
            <Bilingual en="About" zh="关于我" />
          </h2>
          <p>
            <Bilingual
              en="I'm a fairly unremarkable person living in Canberra. Software development is the work; games are the life."
              zh="我是堪培拉一个平平无奇的人。软件开发是工作，游戏是生活。"
            />
          </p>
          <p>
            <Bilingual
              en="In my free time I play games. That's a lie — I play when I'm busy too. PC, console, mobile, TCGs, board games: I'll try just about anything."
              zh="空闲的时候我喜欢打游戏——骗你的，忙的时候也打。电脑、主机、手游、TCG、桌游，基本来者不拒。"
            />
          </p>
          <p>
            <Bilingual
              en="But I like making them more than playing them. Four years of game development, mostly in Unity, several Global Game Jams, and a few longer-running projects."
              zh="但比起玩，我更喜欢做。四年游戏开发经验，主要用 Unity，参加过好几届 Global Game Jam，也做过一些长期项目。"
            />
          </p>
          <p>
            <Bilingual
              en="I've come to think creating is the whole point — the one thing that separates us from every other species. Games are the medium I want to say things through, so people can experience an idea instead of just being told it."
              zh="我一直觉得人生的终极目标是创造——那大概是人和其他物种唯一的区别。我想让游戏成为我思想的载体，让更多人真正体验到它，而不只是听我说。"
            />
          </p>
        </Reveal>
      </section>

      <section id="skills" className="section">
        <Reveal>
          <Eyebrow en="Instruments aboard" zh="随身仪器" />
          <h2>
            <Bilingual en="Skills" zh="技能" />
          </h2>
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.labelEn} delay={i * 90} className="skill-group">
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
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <Reveal>
          <Eyebrow en="Expedition log" zh="探索记录" />
          <h2>
            <Bilingual en="Projects" zh="项目" />
          </h2>
        </Reveal>
        <div className="card-grid">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <a className="card" href={project.link}>
                <h3>{project.title}</h3>
                <p>
                  <Bilingual en={project.descEn} zh={project.descZh} />
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="favorites" className="section">
        <Reveal>
          <Eyebrow en="Personal artifacts" zh="随身物件" />
          <h2>
            <Bilingual en="Favorites" zh="我的喜好" />
          </h2>
        </Reveal>
        <div className="favorites-grid">
          {favorites.map((game, i) => (
            <Reveal key={game.title} delay={i * 90}>
              <a
                className="favorite-card"
                href={game.steamUrl}
                target="_blank"
                rel="noopener"
              >
                <img
                  className="favorite-cover"
                  src={game.image}
                  alt={game.title}
                  loading="lazy"
                />
                <span className="favorite-title">{game.title}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="now" className="section">
        <Reveal className="now-block">
          <div className="now-text">
            <Eyebrow en="Ship's log" zh="航行日志" />
            <h2>
              <Bilingual en="Now" zh="近况" />
            </h2>
            {/* EDIT ME: update this whenever what you're working on changes */}
            <p>
              <Bilingual
                en="Currently building this very website."
                zh="目前正在搭建这个网站。"
              />
            </p>
          </div>
          <Campfire />
        </Reveal>
      </section>

      <section id="blog" className="section">
        <Reveal>
          <Eyebrow en="Transmissions" zh="信号记录" />
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
        </Reveal>
      </section>

      <section id="contact" className="section">
        <Reveal>
          <Eyebrow en="Signal frequency" zh="联络频道" />
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
        </Reveal>
      </section>
    </>
  );
}
