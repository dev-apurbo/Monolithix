# Monolithix

Monolithix is a responsive company website for a software studio specializing
in product strategy, web and mobile engineering, AI automation, cloud systems,
and product modernization.

## Tech stack

- React 19 and TypeScript
- Next.js 16
- Tailwind CSS
- shadcn components
- Lucide icons
- Vercel hosting

## Getting started

### Requirements

- Node.js 22.13.0 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run start    # Run the production build locally
npm run lint     # Check the code with Oxlint
npm run format   # Format the code with Oxfmt
```

## Project structure

```text
app/              Pages, layout, and global styles
components/ui/    Reusable interface components
hooks/            Shared React hooks
lib/              Shared utilities
public/           Static assets and social preview image
vercel.json       Vercel framework configuration
```

## Deployment

The project is configured for Vercel's native Next.js runtime. Import this
repository into Vercel and keep these project settings:

- Framework Preset: **Next.js**
- Build Command: **Next.js default** or `npm run build`
- Output Directory: **Next.js default**

Every push to the production branch will trigger a new deployment. If the
project previously used a custom `dist` output directory, clear that override
before redeploying.
