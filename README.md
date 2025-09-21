# Bye-Wind

A Dashboard app with two pages built for assignment submission. Responsive on any screen, have dark mode. Built using Next.js, React 19, ShadCN UI and TailwindCSS ensuring perfomance, reusability and  scalability.
## �️ Tech Stack

- **React 19** — UI library
- **Next.js 15** — App framework
- **shadcn/ui** — Accessible React components
- **Tailwind CSS** — Utility-first CSS framework
- **date-fns** — Date utility library
- **TanStack Table** — Headless table library
- **Recharts** — Charting library
- **next-themes** — Dark mode and theme management

## �🚀 Deployed Link

[Live Demo]https://bye-wind-two.vercel.app

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Naveenkms/bye-wind.git
   cd bye-wind
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## 🧪 Testing

- **Unit & Component Tests:**
  ```bash
  pnpm test
  ```
- **End-to-End Tests:**
  ```bash
  pnpm test:e2e
  ```

### CI Workflow for E2E Tests

End-to-end tests are run automatically in CI using Playwright. The workflow includes:

- Install dependencies
- Build the application
- Run Playwright E2E tests

Example (GitHub Actions):

```yaml
jobs:
   e2e:
      runs-on: ubuntu-latest
      steps:
         - uses: actions/checkout@v4
         - uses: pnpm/action-setup@v2
            with:
               version: 8
         - run: pnpm install
         - run: pnpm build
         - run: pnpm test:e2e
```

## 📁 Project Structure

- `app/` — Routing, layouts, pages, and page wise components
- `components/` — Reusable UI components
- `hooks/` — Custom React hooks
- `lib/` — Shared utilities
- `public/` — Static assets
- `tests/` — Playwright E2E tests

> Built with ❤️ by [Naveenkms](https://github.com/Naveenkms)
