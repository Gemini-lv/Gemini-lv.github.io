import {
  experiences,
  focusAreas,
  profile,
  projects,
  publications,
  skills,
} from "@/data/profile";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          {profile.name}
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#focus">方向</a>
          <a href="#experience">经历</a>
          <a href="#projects">项目</a>
          <a href="#publications">论文</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="eyebrow">Geophysics · AI · Engineering Management</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero__role">
              <span>{profile.company}</span>
              <span>{profile.role}</span>
            </p>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#publications">
                查看论文
              </a>
              <a className="button button--ghost" href="#projects">
                研发项目
              </a>
            </div>
          </div>

          <div className="hero__visual" aria-label="研究与工程概览">
            <div className="signal-panel">
              <div className="signal-panel__top">
                <span>DAS SIGNAL</span>
                <span>AI DETECTION</span>
              </div>
              <svg viewBox="0 0 620 320" role="img" aria-label="分布式光纤传感信号示意">
                <path
                  className="grid-line"
                  d="M0 78H620M0 156H620M0 234H620M95 0V320M190 0V320M285 0V320M380 0V320M475 0V320M570 0V320"
                />
                <path
                  className="trace trace-a"
                  d="M0 105 C28 62 52 67 78 108 S126 158 160 111 S215 36 250 110 S303 168 340 110 S405 54 435 105 S485 158 520 111 S575 52 620 102"
                />
                <path
                  className="trace trace-b"
                  d="M0 205 C35 178 62 177 94 204 S151 243 184 205 S244 141 276 202 S342 258 372 204 S430 160 465 206 S560 248 620 200"
                />
                <g className="nodes">
                  <circle cx="86" cy="105" r="5" />
                  <circle cx="249" cy="110" r="5" />
                  <circle cx="436" cy="105" r="5" />
                  <circle cx="276" cy="202" r="5" />
                  <circle cx="520" cy="111" r="5" />
                </g>
              </svg>
              <div className="signal-panel__metrics">
                <div>
                  <strong>{publications.length}</strong>
                  <span>论文</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>一作</span>
                </div>
                <div>
                  <strong>2022-2025</strong>
                  <span>代表成果</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section intro" id="focus" aria-labelledby="focus-title">
          <div className="section__heading">
            <p className="eyebrow">Focus</p>
            <h2 id="focus-title">{profile.headline}</h2>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <article key={area.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="experience" aria-labelledby="experience-title">
          <div className="section__heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">经历</h2>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline__item" key={`${item.time}-${item.title}`}>
                <time>{item.time}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="section__heading">
            <p className="eyebrow">Projects</p>
            <h2 id="projects-title">代表项目</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills" aria-labelledby="skills-title">
          <div className="section__heading">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title">能力栈</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section publications" id="publications" aria-labelledby="publications-title">
          <div className="section__heading">
            <p className="eyebrow">Publications</p>
            <h2 id="publications-title">发表成果</h2>
            <p>
              优先列出可核验的期刊、年份、作者角色与 DOI / 期刊页面。ResearchGate
              未检索到稳定个人主页，因此保留为搜索入口。
            </p>
          </div>
          <div className="paper-tools">
            {profile.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
          <ol className="paper-list">
            {publications.map((paper, index) => (
              <li key={paper.href}>
                <article>
                  <span className="paper-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{paper.title}</h3>
                    <p>{paper.meta}</p>
                  </div>
                  <a href={paper.href} target="_blank" rel="noreferrer">
                    {paper.linkLabel}
                  </a>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">欢迎交流研发、光纤传感与智能监测项目</h2>
          </div>
          <div className="contact__links">
            {profile.emails.map((email) => (
              <a className="button button--primary" href={`mailto:${email}`} key={email}>
                {email}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>
          © {year} {profile.name}
        </span>
        <span>Built with Next.js for Vercel</span>
      </footer>
    </>
  );
}
