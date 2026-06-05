<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Conventions du projet

## Overlays (modales, lightbox) → toujours via React portal

Les overlays plein écran (`CaseModal`, `Lightbox`) sont rendus avec
`createPortal(..., document.body)` — c'est **obligatoire**, pas optionnel.

Deux pièges CSS l'imposent dans ce projet :

1. **`transform` crée un stacking context.** Les sections de la home sont
   enveloppées dans `<Reveal>`, qui anime via `translate-y`. Un overlay rendu
   à l'intérieur reste piégé dans ce contexte et passe **sous** le header
   (`sticky z-40`), malgré un `z-50`/`z-60`.
2. **`backdrop-filter` crée un containing block pour les descendants
   `position: fixed`.** `CaseModal` a `backdrop-blur` + `overflow-y-auto` :
   une `Lightbox` `fixed inset-0` rendue dedans s'ancre au contenu scrollé de
   la modale, pas au viewport → l'image s'ouvre « tout en haut » et oblige à
   remonter.

Portaler vers `document.body` règle les deux : l'overlay échappe au stacking
context de `Reveal` et au containing block de la modale. Pattern : `mounted`
state (`useEffect(() => setMounted(true), [])`) + `if (!mounted) return null`
avant le `createPortal`, pour éviter toute référence à `document` au SSR.

→ Tout nouvel overlay doit suivre ce pattern.
