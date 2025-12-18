# Copilot instructions (Install Scripts Hub)

## Project reality check
- This repo is **Next.js-only**: **Next.js (App Router) + React 19** with static export; see [src/app/layout.tsx](src/app/layout.tsx), [src/app/page.tsx](src/app/page.tsx), [next.config.js](next.config.js).
- Do not add alternative app frameworks or build tooling; keep routing and build under Next.js.

## Dev workflows
- Dev server: `npm run dev` (or `pnpm run dev` / `bun run dev`) → Next dev server.
- Build/static export: `npm run build` (uses `output: 'export'` in [next.config.js](next.config.js)).
- Lint/format: `npm run lint`, `npm run format`, `npm run format:check`.

## Data model + data flow
- Script metadata is loaded client-side via `fetch('/scripts.<lang>.json')` with fallback to `fetch('/scripts.json')`; logic lives in [src/lib/services/ScriptService.ts](src/lib/services/ScriptService.ts).
- The UI loads scripts on language change and filters locally; see [src/app/page.tsx](src/app/page.tsx).
- Installation command generation:
  - If `script.url` is relative, it becomes `${window.location.origin}/installs/<script.url>`.
  - Default command is `curl -fsSL <scriptUrl> | bash` (unless `script.command` is provided).
- Static assets are expected under Next’s public root: JSON files and install scripts exist in [public](public).

## i18n + theme conventions
- i18n is a small React context:
  - Provider/hook: [src/lib/i18n/provider.tsx](src/lib/i18n/provider.tsx)
  - Re-exported API: [src/lib/i18n/index.ts](src/lib/i18n/index.ts)
  - Translations: [src/lib/i18n/translations.ts](src/lib/i18n/translations.ts)
  - Usage pattern: `const { t, language } = useI18n();` then `t('home.title')` (see [src/app/page.tsx](src/app/page.tsx)).
- Theme is controlled by toggling the `dark` class on `<html>` and setting `color-scheme`; see [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx) and CSS vars in [src/app/globals.css](src/app/globals.css).

## Styling + TS conventions
- Styling uses Tailwind + CSS variables (tokens like `hsl(var(--primary))`) rather than hard-coded colors; follow existing patterns in [src/components](src/components).
- TypeScript is strict and enforces unused checks; see [tsconfig.json](tsconfig.json).
- Path alias `@/` maps to `src/`; prefer `@/lib/...` and `@/components/...` imports.

## Adding/changing install scripts
- Add the shell script to [public/installs](public/installs).
- Add/modify entries in the corresponding JSON files (e.g., [public/scripts.en.json](public/scripts.en.json), [public/scripts.zh.json](public/scripts.zh.json), plus [public/scripts.json](public/scripts.json) as fallback).
- Keep `url` as the script filename (e.g. `uv.sh`) unless you intend an absolute URL.

## Static export / base path
- Deploys may set `NEXT_PUBLIC_BASE_PATH` (see [next.config.js](next.config.js)). When changing asset fetching or URL generation, confirm paths still work under a non-root base path.
