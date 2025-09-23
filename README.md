# TanStack Router File-Based Routing Example

A React application demonstrating file-based routing using TanStack Router with TypeScript, Vite, and Tailwind CSS.

## Features

- 🚀 File-based routing with TanStack Router
- ⚡ Vite for fast development and building
- 🎨 Tailwind CSS for styling
- 📱 TypeScript for type safety
- 🔧 Auto-generated route tree
- 🛠️ Development tools integration

## Routes

- `/` - Home page
- `/about` - About page
- `/posts` - Posts index page
- `/posts/:postId` - Dynamic post page

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tanstack-router-file-based
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root layout component
│   ├── index.tsx           # Home page (/)
│   ├── about.tsx           # About page (/about)
│   └── posts/
│       ├── index.tsx       # Posts index (/posts)
│       └── $postId.tsx     # Dynamic post page (/posts/:postId)
├── routeTree.gen.ts        # Auto-generated route tree
├── main.tsx                # Application entry point
└── global.css              # Global styles
```

## Technologies Used

- [React 19](https://react.dev/) - UI library
- [TanStack Router](https://tanstack.com/router) - Type-safe router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [ESLint](https://eslint.org/) - Code linting

## File-Based Routing

TanStack Router automatically generates routes based on the file structure in the `src/routes` directory:

- `__root.tsx` - Root layout that wraps all pages
- `index.tsx` - Maps to the root path `/`
- `about.tsx` - Maps to `/about`
- `posts/index.tsx` - Maps to `/posts`
- `posts/$postId.tsx` - Maps to `/posts/:postId` (dynamic route)

The route tree is automatically generated in `routeTree.gen.ts` and should not be manually edited.
