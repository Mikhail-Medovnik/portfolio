# Component conventions

## TypeScript naming

- Interfaces: prefix `I` — `IProject`, `IHeaderProps`, `ITimelineEntry`.
- Type aliases: prefix `T` — `TBreakpoint`.

## File structure

- One component = one folder = `Component.tsx` + `Component.styles.ts`. No `index.ts` barrel files.
- Shared, non-feature-specific UI primitives live in `src/ui/` (`primitives.ts` for styled-components primitives, `Button.tsx` for the composed button).

## Server vs Client Components

- Server Component by default **only for components with zero styled-components usage** — in this codebase, only `BackgroundAnimation` qualifies.
- Every component whose own file directly renders a styled-components primitive (its own `styled.x`, an import from `src/ui/primitives.ts`, or `src/ui/Button.tsx`) needs `"use client"` at the top of that file. This is not optional and is not about hooks/refs/browser APIs — styled-components' theme access goes through React Context, and Context providers only resolve inside the client render tree. A Server Component that directly calls a themed styled-component executes during the RSC server pass with no provider active, so `props.theme` is `undefined` and the render throws (`TypeError: Cannot read properties of undefined (reading 'breakpoints')`). This was confirmed by an actual crash during Task 2 of the migration, not a theoretical concern.
- `Hero.tsx` **does** need `"use client"` — it directly renders `Section`, `SectionText`, `SectionTitle`, and `Button`, all themed styled-components primitives.
- `app/layout.tsx` is the one exception: it must stay a Server Component regardless of styled-components usage, because it exports `metadata` and Next.js disallows exporting `metadata`/`generateMetadata` from a `"use client"` file.

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
