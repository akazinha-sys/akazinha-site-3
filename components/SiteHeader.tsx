'use client'

import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'

const links = [
  { href: '#inicio', label: 'INÍCIO' },
  { href: '#musicas', label: 'MÚSICAS' },
  { href: '#sobre', label: 'SOBRE' },
  { href: '#estudio', label: 'ESTÚDIO' },
  { href: '#contato', label: 'CONTATO' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setMenuOpen(false)

  // Fecha o menu com Esc ou clicando fora dele.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  return (
    <header className="site-header" ref={headerRef}>
      <a className="brand" href="#inicio" onClick={closeMenu} aria-label="AKAZinha — início">
        <img src="/logo-z.png" alt="" className="brand-mark" width={47} height={38} />
        <span>AKAZinha</span>
      </a>

      <button
        ref={buttonRef}
        type="button"
        className="menu-button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="menu-principal"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav id="menu-principal" className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Principal">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-social" href={site.instagram.url} target="_blank" rel="noreferrer">
        {site.instagram.handle}
      </a>
    </header>
  )
}
