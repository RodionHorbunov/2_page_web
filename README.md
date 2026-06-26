# 2 Page Web

A simple two-page website with navigation buttons.

**2 Page Web** · slug: `2_page_web`

## Prerequisites

You need **Node.js 18+** and **npm** to run the dev server.

### Option A — Install Node globally (recommended if you work on many projects)

1. Download the **LTS** installer from [nodejs.org](https://nodejs.org/).
2. Restart your terminal, then verify:

   ```bash
   node --version
   npm --version
   ```

### Option B — Use the project portable Node (no global install)

This repo includes a self-contained Node at `.tools/node` (macOS). Use it when system `npm` is missing (`zsh: command not found: npm`).

**One-time per terminal session** — add portable Node to your PATH, then install and start the dev server:

```bash
cd /Users/rodionhorbunov/Projects/2_page_web
export PATH="/Users/rodionhorbunov/Projects/2_page_web/.tools/node/bin:$PATH"
npm install && npm run dev
```

Or run the helper script (no global npm required):

```bash
cd /Users/rodionhorbunov/Projects/2_page_web
bash scripts/dev.sh
```

After exporting PATH in that terminal, you can also use:

```bash
npm run dev:local
```

## Development

If Node is installed globally (Option A):

```bash
cd /Users/rodionhorbunov/Projects/2_page_web
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (Vite default port).

Production build:

```bash
npm run build
npm run preview
```

## Pages

| Route | Buttons | Navigation |
|-------|---------|------------|
| `/` (Page 1) | 1, 2, 3, 4 | Button **4** goes to Page 2 |
| `/page2` (Page 2) | 5, 6, 7, 8 | Back link returns to Page 1 |

## Stack

| | |
|---|---|
| Framework | **Vite + React 19** + TypeScript |
| Routing | **React Router 7** (client SPA) |
| Styling | **CSS Modules** + CSS variables |
| Deploy | **Cloudflare Pages** (static `dist/`) |

## License

Private / personal project.
