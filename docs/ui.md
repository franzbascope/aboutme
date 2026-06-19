# UI Coding Standards

## Core rule

All UI must be built from **shadcn/ui** components. Do not write custom components from scratch.

- Before building any UI, check whether a [shadcn/ui component](https://ui.shadcn.com/docs/components) covers the need (button, input, dialog, dropdown, card, form, table, etc.) and use it.
- If no shadcn component covers the need, compose existing shadcn primitives instead of writing raw `<div>`/`<button>`/etc. markup with custom styling.
- Do not hand-roll components that shadcn already provides (e.g. no custom modal when `Dialog` exists, no custom dropdown when `DropdownMenu` exists, no custom button styling when `Button` exists).
- Do not fork or rewrite a shadcn component's internals. If a shadcn component needs different behavior, use its documented props/variants (`variant`, `size`, `asChild`, etc.) rather than editing the generated source in `components/ui/`.

## Setup

shadcn/ui is not yet installed in this project. Before writing any UI code, initialize it:

```bash
npx shadcn@latest init
```

Then add components on demand as they're needed, e.g.:

```bash
npx shadcn@latest add button input dialog
```

This generates component source directly into `components/ui/` — that generated code is the only acceptable place for component implementation. Treat it as vendored: don't hand-edit beyond what the shadcn CLI/docs recommend.

## File conventions

- Generated primitives live in `components/ui/` (created by the shadcn CLI). Do not add hand-written files here.
- Page-level composition lives in `app/**` per the Next.js App Router structure already in place (see `CLAUDE.md`).
- If a piece of composed UI is reused across multiple routes, extract it to `components/` (not `components/ui/`) as a thin composition of shadcn primitives — not a new styled primitive.
- Import shadcn components via the `@/*` path alias, e.g. `import { Button } from "@/components/ui/button"`.

## Styling

- Styling is Tailwind CSS v4 (config-free, CSS-first — see `app/globals.css`). Use Tailwind utility classes for layout and spacing around shadcn components.
- Do not introduce a second styling system (CSS modules, styled-components, inline `style` objects) for anything shadcn or Tailwind already covers.
- Use the `cn()` helper (from `lib/utils`, added by the shadcn CLI) to merge conditional class names instead of manual string concatenation.
- Respect shadcn's theme tokens (CSS variables in `app/globals.css` such as `--background`, `--foreground`, and the ones the shadcn `init` step adds) rather than hardcoding colors. Use Tailwind's theme-aware classes (e.g. `bg-background`, `text-foreground`) instead of literal hex/rgb values.

## Variants and customization

- Use a component's built-in `variant`/`size` props before adding extra classes.
- If recurring custom styling is needed on top of a shadcn component, prefer extending the component's `variants` definition (where the component uses `cva`) over scattering ad-hoc `className` overrides across call sites.

## Icons

- Use `lucide-react` (shadcn's default icon set) for icons, consistent with shadcn component examples. Don't mix in a second icon library.

## Forms

- Build forms with shadcn's `Form` component (wraps `react-hook-form` + `zod`), not plain uncontrolled `<form>` markup with manual validation.

## Accessibility

- Because shadcn components are built on Radix UI primitives, accessibility (focus management, ARIA attributes, keyboard nav) is handled for you — do not override or remove Radix's generated ARIA attributes, `role`s, or focus handling.
