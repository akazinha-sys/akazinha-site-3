'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

// Carrossel horizontal dos lançamentos.
// - Em telas largas, se todos os cards cabem, os controles ficam escondidos.
// - Quando há mais cards do que cabem na tela (celular ou mais lançamentos),
//   aparecem o contador "1 / N" e as setas.
export default function ReleaseCarousel({
  children,
  revealIndex = 0,
}: {
  children: ReactNode
  revealIndex?: number
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [positions, setPositions] = useState(1)

  // Distância entre o início de um card e o início do próximo.
  const getStep = useCallback(() => {
    const cards = trackRef.current?.children
    if (!cards || cards.length === 0) return 0
    const first = cards[0] as HTMLElement
    if (cards.length > 1) return (cards[1] as HTMLElement).offsetLeft - first.offsetLeft
    return first.offsetWidth
  }, [])

  const update = useCallback(() => {
    const track = trackRef.current
    const step = getStep()
    if (!track || step <= 0) return

    const max = track.scrollWidth - track.clientWidth
    if (max < 4) {
      setPositions(1)
      setIndex(0)
      return
    }

    const total = Math.round(max / step) + 1
    const current = Math.min(total - 1, Math.max(0, Math.round(track.scrollLeft / step)))
    setPositions(total)
    setIndex(current)
  }, [getStep])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    update()
    const observer = new ResizeObserver(update)
    observer.observe(track)
    return () => observer.disconnect()
  }, [update])

  const go = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({ left: direction * getStep(), behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <div className="release-carousel reveal" style={{ '--i': revealIndex } as CSSProperties}>
      <div
        className="release-grid"
        ref={trackRef}
        onScroll={update}
        role="group"
        aria-label="Últimos lançamentos"
      >
        {children}
      </div>

      {positions > 1 && (
        <div className="release-controls">
          <span className="release-counter" aria-live="polite">
            {index + 1} / {positions}
          </span>
          <button
            type="button"
            className="release-arrow"
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Lançamento anterior"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              <path d="M7 1 1 7l6 6" />
            </svg>
          </button>
          <button
            type="button"
            className="release-arrow"
            onClick={() => go(1)}
            disabled={index === positions - 1}
            aria-label="Próximo lançamento"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              <path d="m1 1 6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
