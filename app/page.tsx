import RevealObserver from '../components/RevealObserver'
import SiteHeader from '../components/SiteHeader'
import { instagramPosts, platforms, releases, site, streamingLinks, studio } from '../data/site'

const profileLinks = streamingLinks(platforms)
// "VER TODOS" vai para o primeiro perfil preenchido; se nenhum, para o Instagram.
const allReleasesHref = profileLinks[0]?.href ?? site.instagram.url

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: site.name,
  url: site.url,
  sameAs: [site.instagram.url, ...profileLinks.map((link) => link.href)],
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader />

      <main id="conteudo">
        <section id="inicio" className="hero section-dark">
          <div className="hero-image" aria-hidden="true">
            <img className="hero-photo" src={studio.hero} alt="" width={1920} height={1080} fetchPriority="high" />
            <div className="hero-grain" />
          </div>
          <div className="hero-content">
            <div className="hero-logo-line">
              <img src="/logo-z.png" alt="" className="hero-mark" />
              <h1>AKAZinha</h1>
            </div>
            <p className="eyebrow">MÚSICA&nbsp;&nbsp; / &nbsp;&nbsp;PRODUÇÃO&nbsp;&nbsp; / &nbsp;&nbsp;CRIAÇÃO</p>
            <a className="text-link" href="#musicas">▶ &nbsp; OUVIR AGORA</a>
          </div>
          <div className="hero-code">AKAZinha.wav / 001</div>
        </section>

        <section id="musicas" className="releases section-dark section-border reveal">
          <div className="section-intro reveal reveal-delay-1">
            <span className="section-label">ÚLTIMOS LANÇAMENTOS</span>
            <h2>SOM<br />QUE VEM<br />DE DENTRO.</h2>
            <a className="text-link" href={allReleasesHref} target="_blank" rel="noreferrer">VER TODOS&nbsp; →</a>
          </div>
          <div className="release-grid reveal reveal-delay-2">
            {releases.map((release) => {
              const links = streamingLinks(release)
              const main = links[0]
              return (
                <article className="release-card" key={release.title}>
                  <div className="release-art">
                    <img
                      className="release-cover"
                      src={release.cover}
                      alt={`Capa de ${release.title}`}
                      width={1000}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                    />
                    {main && (
                      <a
                        className="play"
                        href={main.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ouvir ${release.title} no ${main.label}`}
                      >
                        ▶
                      </a>
                    )}
                  </div>
                  <h3>{release.title}</h3>
                  <p>{release.meta}</p>
                  {links.length > 0 && (
                    <div className="release-links">
                      {links.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section id="sobre" className="about section-border reveal">
          <div className="about-photo photo-z" aria-hidden="true">
            <img src="/logo-z.png" alt="" />
          </div>
          <div className="about-copy section-dark">
            <span className="section-label">SOBRE</span>
            <h2>AKAZinha</h2>
            <p>
              AKAZinha é um espaço de criação. Música, produção, ideias e projetos que nascem dentro e fora do estúdio.
            </p>
            <p>
              Entre o analógico e o digital, entre o improviso e o plano, aqui o som ganha forma.
            </p>
            <a className="text-link" href="#estudio">SAIBA MAIS&nbsp; →</a>
          </div>
          <div className="about-photo photo-studio">
            <img src={studio.about} alt={studio.alt} width={900} height={1100} loading="lazy" decoding="async" />
          </div>
        </section>

        <section id="estudio" className="studio section-dark section-border reveal">
          <div className="studio-heading">
            <span className="section-label">ESTÚDIO</span>
            <h2>UM LUGAR<br />PARA FAZER<br /><em>ACONTECER.</em></h2>
          </div>
          <figure className="studio-visual">
            <img src={studio.main} alt={studio.alt} width={1600} height={900} loading="lazy" decoding="async" />
          </figure>
          <div className="studio-footer">
            <p>Produção musical / gravação / mixagem / criação</p>
            <a className="outline-button" href="#contato">FALAR COM A AKAZINHA</a>
          </div>
        </section>

        <section className="instagram section-border section-dark reveal">
          <div className="instagram-copy">
            <span className="section-label">INSTAGRAM</span>
            <h2>{site.instagram.handle}</h2>
            <p>BASTIDORES / LANÇAMENTOS / SESSÕES / VIDA REAL</p>
            <a className="outline-button" href={site.instagram.url} target="_blank" rel="noreferrer">SEGUIR →</a>
          </div>
          <div className="instagram-grid">
            {instagramPosts.map((post, index) => (
              <a
                className={`insta-tile tile-${index + 1}`}
                key={post.image}
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver no Instagram: ${post.label}`}
              >
                <img src={post.image} alt="" width={1000} height={1000} loading="lazy" decoding="async" />
                <span>{post.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contato" className="contact section-dark section-border reveal">
          <span className="section-label">CONTATO</span>
          <h2>VAMOS<br /><em>CRIAR?</em></h2>
          <div className="contact-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.whatsapp && (
              <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            )}
            <a href={site.instagram.url} target="_blank" rel="noreferrer">{site.instagram.handle}</a>
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer section-dark section-border">
        <div className="footer-brand">
          <img src="/logo-z.png" alt="" />
          <span>{site.name}</span>
        </div>
        <span>SOM&nbsp;&nbsp; / &nbsp;&nbsp;CULTURA&nbsp;&nbsp; / &nbsp;&nbsp;CRIAÇÃO</span>
        <span>{site.location}</span>
        <span>© {new Date().getFullYear()} AKAZinha</span>
      </footer>
    </>
  )
}
