# Component conventions

## TypeScript naming

- Interfaces: prefix `I` — `IProject`, `IHeaderProps`, `ITimelineEntry`.
- Type aliases: prefix `T` — `TBreakpoint`.

## File structure

- One component = one folder = `Component.tsx` + `Component.styles.ts`. No `index.ts` barrel files.
- Shared, non-feature-specific UI primitives live in `src/ui/` (`primitives.ts` for styled-components primitives, `Button.tsx` for the composed button).

## Server vs Client Components

- Server Component by default (no directive).
- Add `"use client"` only when the component uses hooks, refs, or browser-only APIs (event listeners, `window`, `document`, etc.). Example: `TimeLine.tsx` needs it for its carousel state and scroll handling; `Hero.tsx` does not.

## Styled-components

- Custom (non-DOM) props on styled components use a `$`-prefixed transient prop name (`$grid`, `$active`, `$disabled`, …) so they are never forwarded to the DOM node.
- The theme is typed via `src/types/styled.d.ts` (module augmentation of `DefaultTheme`) — never cast `props.theme` to `any`.
- Global styles live in `src/styles/global-styles.ts`; theme data lives in `src/styles/theme.ts`.
- SSR/SSG of styled-components under the App Router goes through `lib/registry.tsx` — do not add a second `ThemeProvider` or a second SSR stylesheet mechanism anywhere else.

## Props

- Every component that accepts props declares `interface IComponentNameProps { ... }` directly above the component.
- Components without props do not declare an empty interface.

## SEO

- Every route-level `page.tsx` that isn't the homepage should export its own `metadata` (or `generateMetadata`) — don't rely solely on the root layout's defaults once more pages exist.
- Any new page needs a real, meaningful `alt` on every image and exactly one `<h1>`.
