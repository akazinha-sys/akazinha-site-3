'use client'

import { useEffect } from 'react'

// Revela as seções ao rolar a página (classe .reveal -> .is-visible).
export default function RevealObserver() {
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

  return null
}
