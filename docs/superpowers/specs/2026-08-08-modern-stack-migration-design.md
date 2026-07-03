---
title: Миграция портфолио на современный стек
date: 2026-08-08
status: approved
supersedes: docs/migration-plan.mdx
---

# Миграция портфолио на современный стек

## Контекст

Текущий стек: Next.js 10 (Pages Router), React 17, JavaScript, styled-components 5.3, Babel (только ради SSR-плагина styled-components), `next export` на Netlify. Нет TypeScript, нет SEO (ни title/description, ни sitemap, ни alt-текстов), в коде есть неиспользуемые компоненты и зависимости.

В репозитории уже лежит `docs/migration-plan.mdx` — более ранний план миграции на Next 16 App Router + SCSS Modules **без** styled-components. Этот документ его заменяет: новые требования явно оставляют styled-components в проекте. `docs/migration-plan.mdx` после реализации этого плана удаляется как устаревший.

## Цели

1. Next.js 15, App Router, React 19, TypeScript (strict), styled-components (актуальная v6.x).
2. Полностью статический сайт (`output: 'export'`), деплой на Netlify как сейчас.
3. Сильный SEO из коробки.
4. TypeScript-конвенция именования: `I`-префикс для интерфейсов, `T`-префикс для типов; зафиксирована в `.claude/components.md`.
5. Структура готова к росту в multi-page (в частности — будущий блог), без создания блога сейчас.
6. Убран мёртвый код и лишние зависимости.
7. Убран Babel — SSR-стили styled-components через встроенный SWC-компилятор Next, без перехода на Vite (Next и Vite несовместимы как бандлеры; Babel был нужен только ради одного плагина, который в Next есть штатно).
8. Реализация — субагентным подходом: независимые куски работы выполняются параллельными агентами.

## Решённые развилки

- **Next vs Vite**: остаёмся на Next.js. Babel убираем через `compiler.styledComponents: true` в `next.config.ts` (встроенная SWC-трансформация), `.babelrc` удаляется.
- **App Router vs Pages Router**: App Router. Причины: нативный Metadata API (сейчас на сайте вообще нет title/description), штатные `sitemap.ts`/`robots.ts` без сторонних пакетов, nested layouts и file-based роутинг естественно поддерживают будущий `/blog` без переделки существующих страниц.
- **Пакетный менеджер**: npm — единственный. `yarn.lock` удаляется, остаётся `package-lock.json`.
- **Домен для метаданных**: пока нет собственного домена (только `*.netlify.app` для отдельных проектов, не для самого портфолио). `metadataBase`/OG/sitemap используют плейсхолдер через `NEXT_PUBLIC_SITE_URL`, подставляется перед реальным деплоем.

## Архитектура

```
app/
  layout.tsx          — RootLayout: <html>/<body>, StyledComponentsRegistry, ThemeProvider, GlobalStyles, Header, Footer, metadataBase
  page.tsx             — главная: Hero + Projects + Technologies + Timeline
  sitemap.ts           — dynamic = "force-static", revalidate = false
  robots.ts            — dynamic = "force-static", revalidate = false
  not-found.tsx
lib/
  registry.tsx         — StyledComponentsRegistry (официальный Next-паттерн для styled-components под App Router: 'use client' + useServerInsertedHTML; работает и при static export, так как статическая генерация использует тот же рендер-пайплайн на этапе билда)
src/
  components/
    Header/Header.tsx + Header.styles.ts
    Footer/Footer.tsx + Footer.styles.ts
    Hero/Hero.tsx + Hero.styles.ts
    Projects/Projects.tsx + Projects.styles.ts
    Technologies/Technologies.tsx + Technologies.styles.ts
    TimeLine/TimeLine.tsx + TimeLine.styles.ts   ("use client" — карусель на хуках/рефах)
    BackgroundAnimation/BackgroundAnimation.tsx   (переименовано из BackgrooundAnimation — опечатка)
  ui/                   — бывший src/styles/GlobalComponents: Section, SectionTitle, SectionText, SectionDivider, SectionSubText, SecondaryBtn, ButtonBack/ButtonFront, LinkContainer, LinkIconImg
  constants/
    projects.ts          — типизированные projects, TimeLineData, privateData
  styles/
    theme.ts              — типизированная тема (цвета, шрифт, брейкпоинты)
    global-styles.ts      — createGlobalStyle, styled-normalize остаётся (не лишний код — крошечный и выполняет свою задачу)
  types/
    styled.d.ts            — module augmentation styled-components DefaultTheme
public/
  ...(без weather.png, projects.jpeg)
next.config.ts           — output: 'export', images.unoptimized: true, compiler.styledComponents: true
.claude/components.md
```

Блог не создаётся в рамках этой миграции — структура (App Router, file-based роутинг, паттерн `lib/posts.ts` + `app/blog/[slug]/page.tsx` с `generateStaticParams`, уже описанный в старом `docs/migration-plan.mdx`) делает добавление `/blog` в будущем чисто аддитивной задачей.

## Styled-components под App Router + TypeScript

- SSR/SSG стилей — через `StyledComponentsRegistry` (`lib/registry.tsx`), официальный паттерн Next.js для App Router; подключается в `app/layout.tsx`.
- Тема типизирована через module augmentation в `src/types/styled.d.ts` — `props.theme.colors.primary1` и т.п. типизированы без `any`.
- Кастомные (не-DOM) пропсы styled-компонентов — транзиентные `$`-пропсы (`$grid`, `$row`, `$main`, `$nopadding`, `$disabled`, `$alt`, `$colorAlt`, `$large`, `$nav`, `$isOpen` и т.д.) вместо текущих `grid`, `row`, `main` и т.п. Сейчас эти булевы пропсы утекают в DOM-атрибуты (React предупреждает о невалидных HTML-атрибутах на `<section>`/`<button>`/`<div>`) — это чинится апгрейдом заодно.
- `next/font/google` для Space Grotesk вместо runtime-запроса к Google Fonts из текущего `_document.js`.

## TypeScript-конвенции

- `interface` → префикс `I`: `IProject`, `IHeaderProps`, `ITimelineEntry`, `IPrivateData`.
- `type` → префикс `T`: `TBreakpoint`, `TThemeColors`.
- Каждый компонент с пропсами объявляет `interface IComponentNameProps` непосредственно над собой; без пропсов — интерфейс не нужен.
- Server Component по умолчанию; `"use client"` — только там, где реально нужны хуки/рефы/браузерные API (TimeLine, при необходимости BackgroundAnimation).
- Один компонент = одна папка = `Component.tsx` + `Component.styles.ts`, без index-барелей (убираем паттерн `NavDropDown/index.js`).

Эти правила фиксируются в `.claude/components.md` — файл создаётся в рамках реализации и служит источником правды для будущих правок компонентов.

## SEO

- Metadata API на каждом route: `title` (шаблон `%s | Mikhail Medovnik`), `description`, `openGraph`, `twitter`; `metadataBase` в `app/layout.tsx`.
- `app/sitemap.ts`, `app/robots.ts` с `export const dynamic = "force-static"; export const revalidate = false;` (обязательно под `output: 'export'`).
- JSON-LD `Person`-схема на главной (имя, должность, ссылки на GitHub/LinkedIn/Telegram из `privateData`).
- `next/font/google` для self-hosted шрифта — выигрыш по LCP/CLS относительно текущего runtime-запроса к Google Fonts.
- `next/image` для карточек проектов: осмысленный `alt` (сейчас отсутствует), явные `width`/`height`. `images.unoptimized: true` обязателен под static export — оптимизации на лету не будет, разметка и `alt`-тексты остаются.
- Семантические landmark-элементы (`<header>`, `<main>`, `<footer>`, `<nav>`) вместо текущих голых `<div>` (например, контейнер Header сейчас — `styled.div`, не `<header>`).
- Один `<h1>` на страницу.
- `app/not-found.tsx` — кастомная 404-страница.

## Чистка кода

Удаляется:
- `src/components/NavDropDown/` — не используется нигде за пределами собственной папки.
- `src/components/Acomplishments/` — импортируется, но закомментирован в `index.js`, никогда не рендерится.
- `src/pages/api/hello.js` (и вся папка `pages/api`) — дефолтный Next-boilerplate; API-роуты не работают под `output: 'export'`.
- Зависимость `react-use-downloader` — используется только для скачивания CV; заменяется на обычный `<a href="/download/….pdf" download>`.
- `public/images/weather.png`, `public/images/projects.jpeg` — не встречаются нигде в коде.
- `ContactDropDown`, `NavProductsIcon` из `HeaderStyles.js` — экспортируются, но не используются в `Header.js` (мёртвый хвост от `NavDropDown`).
- `.babelrc`, `yarn.lock`.
- `docs/migration-plan.mdx` — устаревший план, заменённый этим документом.

Дополнительно, в рамках реализации — систематическое сканирование неиспользуемых экспортов/файлов по всей кодовой базе (TS `noUnusedLocals` + грep), не ограничиваясь списком выше.

## Зависимости

**Убрать**: `styled-normalize` остаётся; `react-use-downloader`, `.babelrc`/babel-plugin для styled-components — убрать.
**Добавить**: `typescript`, `@types/react`, `@types/react-dom`, `@types/node`.
**Обновить**: `next` 10 → 15, `react`/`react-dom` 17 → 19, `styled-components` 5 → 6.x, `react-icons` 4 → 5.x (точные версии фиксируются на этапе реализации через `npm view <pkg> version`, план не хардкодит числа, которые могут устареть).

## Субагентный подход к реализации

1. **Фундамент — последовательно**: `next.config.ts`, `tsconfig.json`, `theme.ts` + `styled.d.ts`, `StyledComponentsRegistry`, `app/layout.tsx`, `src/ui/` — от них зависит всё остальное.
2. **Компоненты — параллельно**: Header, Footer, Hero, Projects, Technologies, TimeLine, BackgroundAnimation почти не зависят друг от друга — раздаются параллельным субагентам после готовности фундамента.
3. **SEO/чистка/финал — последовательно**: sitemap/robots/JSON-LD, дед-код sweep, `.claude/components.md`, финальная сборка (`npm run build`) и ручной обход страниц.

## Критерии готовности

- `npm run build` проходит чисто под `output: 'export'`.
- `npx serve out` — визуальный обход `/`, всех Visit/Source ссылок проектов, скачивание CV.
- View-source главной: `<title>`, meta description, OG-теги, JSON-LD присутствуют.
- `out/sitemap.xml` и `out/robots.txt` существуют и содержат актуальные роуты.
- Ни одного React-предупреждения о невалидных DOM-атрибутах в консоли браузера.
- `.claude/components.md` существует и описывает конвенции из этого документа.
