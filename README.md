# Portfolio — Alessandro Cacchi

Portfolio personale bilingue (IT/EN) realizzato con **Vue 3 + Vite**, deployato su **Vercel**.

## Sviluppo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build di produzione in /dist
npm run preview   # anteprima della build
```

## Dove modificare i contenuti

| Cosa | File |
| --- | --- |
| Nome, ruolo, intro, contatti, esperienza, formazione, competenze | `src/data/profile.js` |
| Progetti (testi, tag, link, copertine, categorie) | `src/data/projects.js` |
| Testi fissi dell'interfaccia (menu, bottoni, titoli sezioni) | `src/data/ui.js` |
| Colori, font, spaziature | `src/assets/main.css` (variabili in `:root`) |

Ogni testo è bilingue: `{ it: '...', en: '...' }`.

### Aggiungere un progetto

1. Metti la copertina in `public/covers/` (consigliato `.webp`, larghezza ~1200px).
2. Aggiungi un oggetto in `src/data/projects.js` con uno `slug` univoco (senza spazi).
3. Il dettaglio sarà raggiungibile anche via link diretto: `/projects/<slug>`.

## Struttura

```
src/
  components/   Header, Hero, Percorso, Progetti (+ card e modale), Competenze, Contatti, Footer
  composables/  useI18n.js — gestione lingua IT/EN (salvata nel browser)
  data/         contenuti del sito
  directives/   v-reveal — animazione all'ingresso delle sezioni
  assets/       main.css — design system
```

## Note

- I font sono self-hosted tramite `@fontsource` (nessuna richiesta a Google Fonts, GDPR-friendly).
- `vercel.json` reindirizza le rotte a `index.html`, così i link `/projects/<slug>` funzionano anche se aperti direttamente.
- Il form contatti usa Formspree (endpoint in `src/components/ContactSection.vue`).
