# AKAZinha.wav — Site

Home da AKAZinha.wav (preto/branco). Requer Node.js 20+.

```bash
npm install
npm run dev
npm run deploy:vinext
```

Abra http://localhost:3000

## Como preencher (tudo em um lugar só)

Abra **`data/site.ts`**. Lá estão e-mail, links das plataformas, lançamentos, fotos e Instagram.

- **Link vazio (`''`) = o botão some sozinho.** Preencha só o que já existe.
- **Fotos:** substitua o arquivo em `public/` mantendo o mesmo nome (ou mude o caminho em `data/site.ts`).

| O que | Arquivo | Tamanho |
| --- | --- | --- |
| Foto do topo | `public/studio/hero.jpg` | 1920×1080 |
| Foto da seção Sobre | `public/studio/sobre.jpg` | 900×1100 (retrato) |
| Foto da seção Estúdio | `public/studio/estudio.jpg` | 1600×900 |
| Capas dos lançamentos | `public/releases/*.jpg` | 1000×1000 |
| Grade do Instagram | `public/instagram/1.jpg` … `5.jpg` | 1000×1000 |
| Preview ao compartilhar o link | `public/og.jpg` | 1200×630 |

As imagens que já estão nessas pastas são **provisórias** (escuras, com o logo). Troque pelas reais.

Para adicionar um lançamento, copie um bloco em `releases` dentro de `data/site.ts`.

## Antes de publicar

1. Confirme o domínio em `site.url` (`data/site.ts`) — ele alimenta o SEO, o sitemap e o preview de link.
2. Preencha `platforms` (perfil nas plataformas) e os links de cada lançamento.
3. Troque as imagens provisórias pelas reais.
4. Escolha um destino de deploy: o projeto tem os dois (`next` e `vinext/Cloudflare`).
5. Opcional: adicionar analytics.

## Estrutura

- `app/page.tsx` — página (componente de servidor, lê tudo de `data/site.ts`)
- `components/SiteHeader.tsx` — menu (abre/fecha com clique, Esc e clique fora)
- `components/RevealObserver.tsx` — animação de revelar ao rolar
- `app/layout.tsx` — SEO, Open Graph, fontes
- `app/sitemap.ts` e `app/robots.ts` — gerados automaticamente1
