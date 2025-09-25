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
├── assets/                 # Static assets
├── routes/
│   ├── __root.tsx          # Root layout component
│   ├── index.tsx           # Home page (/)
│   ├── about.tsx           # About page (/about)
│   ├── _layout.tsx         # Layout route
│   ├── _layout/
│   │   └── list/
│   │       ├── index.tsx   # List page (/list)
│   │       └── $cardId.tsx # Dynamic card page (/list/:cardId)
│   └── posts/
│       ├── index.tsx       # Posts index (/posts)
│       └── $postId.tsx     # Dynamic post page (/posts/:postId)
├── App.tsx                 # Main App component
├── main.tsx                # Application entry point
├── routeTree.gen.ts        # Auto-generated route tree
├── global.css              # Global styles
└── vite-env.d.ts          # Vite environment types
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
- `_layout.tsx` - Layout route that provides shared UI for nested routes
- `_layout/list/index.tsx` - Maps to `/list` (uses _layout.tsx as wrapper)
- `_layout/list/$cardId.tsx` - Maps to `/list/:cardId` (dynamic route with layout)
- `posts/index.tsx` - Maps to `/posts`
- `posts/$postId.tsx` - Maps to `/posts/:postId` (dynamic route)

### Layout Routes

Layout routes (prefixed with `_`) provide shared UI and logic for nested routes without adding path segments to the URL. The `_layout.tsx` file wraps all routes within the `_layout/` directory, allowing you to share components like navigation, headers, or sidebars across multiple pages.

The route tree is automatically generated in `routeTree.gen.ts` and should not be manually edited.
