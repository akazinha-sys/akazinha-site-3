// ============================================================
//  AKAZinha.wav — TUDO que você precisa preencher está aqui.
//
//  • Link vazio ('') = o botão some sozinho do site.
//  • Imagens: basta SUBSTITUIR o arquivo em /public mantendo o
//    mesmo nome (ou mudar o caminho aqui).
// ============================================================

export type Links = {
  spotify: string
  youtube: string
  appleMusic: string
}

export const site = {
  name: 'AKAZinha', // nome rodape
  url: 'https://akazinha.com', // domínio final (usado em SEO, sitemap e preview de link)
  description: 'AKAZinha — música, produção, estúdio e criação. Esteio, RS.',
  email: 'contato@akazinha.com',
  location: 'Esteio — RS',
  whatsapp: '', // ex.: 'https://wa.me/5551999999999'
  instagram: {
    handle: '@akazinha.wav',
    url: 'https://instagram.com/akazinha.wav',
  },
}

// Perfil do artista em cada plataforma (usado em "VER TODOS" e no contato)
export const platforms: Links = {
  spotify: '', // ex.: 'https://open.spotify.com/intl-pt/artist/XXXXXXXX'
  youtube: '', // ex.: 'https://youtube.com/@akazinha'
  appleMusic: '', // ex.: 'https://music.apple.com/br/artist/XXXXXXXX'
}

// Lançamentos — capas quadradas (1000×1000) em /public/releases/
export const releases: ({ title: string; meta: string; cover: string } & Links)[] = [
  {
    title: 'DESCENDÊNCIA',
    meta: 'AKAZinha.wav / 2026',
    cover: '/releases/descendencia.jpg',
    spotify: '', // link da faixa/álbum
    youtube: '',
    appleMusic: '',
  },
  {
    title: 'TUDO VAI PASSAR',
    meta: 'AKAZinha.wav / 2026',
    cover: '/releases/tudo-vai-passar.jpg',
    spotify: '',
    youtube: '',
    appleMusic: '',
  },
  {
    title: 'ZONA DE CONFORTO',
    meta: 'AKAZinha.wav / 2026',
    cover: '/releases/zona-de-conforto.jpg',
    spotify: '',
    youtube: '',
    appleMusic: '',
  },
]

// Fotos do estúdio — em /public/studio/
export const studio = {
  hero: '/studio/hero.jpg', // 1920×1080, aparece no topo do site
  about: '/studio/sobre.jpg', // 900×1100 (retrato), seção "Sobre"
  main: '/studio/estudio.jpg', // 1600×900, seção "Estúdio"
  alt: 'Estúdio da AKAZinha',
}

// Grade do Instagram — imagens quadradas (1000×1000) em /public/instagram/
export const instagramPosts = [
  { image: '/instagram/1.jpg', label: 'Z / studio' },
  { image: '/instagram/2.jpg', label: 'session / 01' },
  { image: '/instagram/3.jpg', label: 'AKAZinha' },
  { image: '/instagram/4.jpg', label: 'monitoring / 02' },
  { image: '/instagram/5.jpg', label: 'outside / RS' },
]

// ---------- helpers (não precisa mexer) ----------
const platformNames: { key: keyof Links; label: string }[] = [
  { key: 'spotify', label: 'Spotify' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'appleMusic', label: 'Apple Music' },
]

export function streamingLinks(source: Links) {
  return platformNames
    .map(({ key, label }) => ({ label, href: source[key] }))
    .filter((link) => link.href)
}
