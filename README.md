# Hardware Management System

## Overview

This project is the first in a series that are aimed to practice building full stack apps with TypeScript and React:

1. This Project (TypeScript, vitest, Zod)
2. Front-end (React, TanStack, Vite.js, Zod)
3. Finalized Project (Firestore, Authentication, Hosting, React Query)

This repository hosts a REPL program that accesses a Firebase Data Connect service to manage a Hardware Store Inventory Management System.

Schema were built for Data Connect, an SDK was generated, and Zod was used to infer TS types and provided practice with Zod Validation.

[Software Demo Video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Usage

### Scripts

| Command           | Description                                                          |
| ----------------- | -------------------------------------------------------------------- |
| `npm run dev-cli` | Build and run the CLI against the local emulator                     |
| `npm run seed`    | Seed the local emulator with sample data (requires emulator running) |
| `npm run build`   | Compile TypeScript                                                   |
| `npm test`        | Run Vitest test suite                                                |
| `npm run lint`    | Run ESLint                                                           |

### CLI Commands

1. `help` — Display help information
2. `exit` — Exit the program and kill the emulator
3. `category ls` — List categories and sub-categories (recursively)
   - `-s, --shallow` — Return only top-level categories
4. `category add` — Prompt through adding a new category
   - `-p, --parent <categoryName>` — Create as a child of the provided category
5. `product find` — Search products (defaults to name search)
   - `-n, --name <productName>` — Search by name
   - `-i, --id <productId>` — Look up by ID
   - `-c, --category <categoryName>` — Filter by category (includes sub-categories)
   - `-m, --manufacturer <manufacturerName>` — Filter by manufacturer
6. `product add <categoryName>` — Prompt through adding a product; also prompts for spec details based on category
7. `product update <productName>` — Prompt through updating a product by name
   - `--id <productId>` — Look up by ID instead of name
8. `manufacturer ls` (`manu ls`) — List all manufacturers
9. `manufacturer add` (`manu add`) — Prompt through adding a manufacturer

## Development Environment

Developed in Visual Studio Code on Nobara Linux

- **Language:** TypeScript
- **Package Manager:** npm
- **Backend-as-a-Service:** Firebase (Data Connect)
- **Validation:** Zod
- **Testing:** Vitest
- **Linter:** ESLint with typescript-eslint

## Useful Websites

### Tutorials

- [Boot.dev | Learn JavaScript](https://www.boot.dev/courses/learn-javascript)
- [Boot.dev | Learn TypeScript](https://www.boot.dev/courses/learn-http-clients-typescript)
- [Boot. dev | TypeScript Pokedex Project](https://www.boot.dev/courses/build-pokedex-cli-typescript)
- [Fireship.dev | JavaScript and TypeScript Modules](https://fireship.dev/c/typescript)

### Reference

- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Zod Documentation](https://zod.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [Firebase Data Connect Documentation](https://firebase.google.com/docs/data-connect)

## Progress

- [x] Project setup and TypeScript config
- [x] Firebase Data Connect schema (GraphQL / CloudSQL)
- [x] Auto-generated SDK integration
- [x] Zod v4 validation schemas for all entities
- [x] CLI — category, manufacturer, and product commands (CRUD)
- [x] Product spec prompts (CPU, GPU, RAM, Storage, PSU, CPU Cooler, Case, Motherboard)
- [x] Vitest configured with test suite for CLI helpers and schemas
- [x] Full test coverage
- [ ] Checkout / cart functionality

## Future Work

- Frontend with Vite + React
- Change to Firestore
- React Router + TanStack Query wiring
- Firebase Auth integration
- Firebase hosting, Authentication, and App Check
