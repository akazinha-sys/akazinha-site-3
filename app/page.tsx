'use client'

import { useEffect, useState } from 'react'

const releases = [
  { title: 'DESCENDÊNCIA', meta: 'AKAZinha.wav / 2026', className: 'art-one' },
  { title: 'TUDO VAI PASSAR', meta: 'AKAZinha.wav / 2026', className: 'art-two' },
  { title: 'ZONA DE CONFORTO', meta: 'AKAZinha.wav / 2026', className: 'art-three' },
]

const instagram = ['Z / studio', 'session / 01', 'AKAZinha', 'monitoring / 02', 'outside / RS']

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="AKAZinha início">
          <img src="/logo-z.png" alt="Z" className="brand-mark" />
          <span>AKAZinha</span>
        </a>

        <button
          className="menu-button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#inicio" onClick={closeMenu}>INÍCIO</a>
          <a href="#musicas" onClick={closeMenu}>MÚSICAS</a>
          <a href="#sobre" onClick={closeMenu}>SOBRE</a>
          <a href="#estudio" onClick={closeMenu}>ESTÚDIO</a>
          <a href="#contato" onClick={closeMenu}>CONTATO</a>
        </nav>

        <a className="header-social" href="https://instagram.com/akazinha.wav" target="_blank" rel="noreferrer">
          @akazinha.wav
        </a>
      </header>

      <section id="inicio" className="hero section-dark">
        <div className="hero-image" aria-hidden="true">
          <div className="studio-light light-a" />
          <div className="studio-light light-b" />
          <div className="monitor monitor-left" />
          <div className="monitor monitor-right" />
          <div className="desk" />
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
          <a className="text-link" href="#contato">VER TODOS&nbsp; →</a>
        </div>
        <div className="release-grid reveal reveal-delay-2">
          {releases.map((release) => (
            <article className="release-card" key={release.title}>
              <div className={`release-art ${release.className}`}>
                <img src="/logo-z.png" alt="" />
                <span className="play">▶</span>
              </div>
              <h3>{release.title}</h3>
              <p>{release.meta}</p>
            </article>
          ))}
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
        <div className="about-photo photo-studio" aria-hidden="true">
          <div className="desk small" />
          <div className="monitor monitor-left small-monitor" />
          <div className="monitor monitor-right small-monitor" />
        </div>
      </section>

      <section id="estudio" className="studio section-dark section-border reveal">
        <div className="studio-heading">
          <span className="section-label">ESTÚDIO</span>
          <h2>UM LUGAR<br />PARA FAZER<br /><em>ACONTECER.</em></h2>
        </div>
        <div className="studio-visual" aria-label="Área reservada para fotografia do estúdio">
          <div className="room-wall" />
          <div className="room-console" />
          <div className="room-speaker speaker-a" />
          <div className="room-speaker speaker-b" />
          <div className="room-glow" />
          <span>INSIRA SUA FOTO DO ESTÚDIO EM /public/studio/</span>
        </div>
        <div className="studio-footer">
          <p>Produção musical / gravação / mixagem / criação</p>
          <a className="outline-button" href="#contato">FALAR COM A AKAZINHA</a>
        </div>
      </section>

      <section className="instagram section-border section-dark reveal">
        <div className="instagram-copy">
          <span className="section-label">INSTAGRAM</span>
          <h2>@akazinha.wav</h2>
          <p>BASTIDORES / LANÇAMENTOS / SESSÕES / VIDA REAL</p>
          <a className="outline-button" href="https://instagram.com/akazinha.wav" target="_blank" rel="noreferrer">SEGUIR →</a>
        </div>
        <div className="instagram-grid">
          {instagram.map((item, index) => (
            <div className={`insta-tile tile-${index + 1}`} key={item}>
              <img src="/logo-z.png" alt="" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="contact section-dark section-border reveal">
        <span className="section-label">CONTATO</span>
        <h2>VAMOS<br /><em>CRIAR?</em></h2>
        <div className="contact-links">
          <a href="mailto:contato@akazinha.com">contato@akazinha.com</a>
          <a href="https://instagram.com/akazinha.wav" target="_blank" rel="noreferrer">@akazinha.wav</a>
        </div>
      </section>

      <footer className="footer section-dark section-border">
        <div className="footer-brand">
          <img src="/logo-z.png" alt="Z" />
          <span>AKAZinha.wav</span>
        </div>
        <span>SOM&nbsp;&nbsp; / &nbsp;&nbsp;CULTURA&nbsp;&nbsp; / &nbsp;&nbsp;CRIAÇÃO</span>
        <span>Esteio — RS</span>
        <span>© 2026 AKAZinha</span>
      </footer>
    </main>
  )
}
