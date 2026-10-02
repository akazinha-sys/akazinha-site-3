import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AKAZinha.wav — Música / Produção / Criação',
  description: 'AKAZinha.wav — música, produção, estúdio e criação.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
