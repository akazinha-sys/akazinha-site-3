import type { Metadata, Viewport } from 'next'
import './globals.css'
import { site } from '../data/site'

const title = 'AKAZinha.wav — Música / Produção / Criação'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  icons: { icon: '/logo-z.png', apple: '/logo-z.png' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    locale: 'pt_BR',
    title,
    description: site.description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
    images: ['/og.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#070707',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Marca que o JS está ativo: as animações de revelar só escondem conteúdo nesse caso. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
