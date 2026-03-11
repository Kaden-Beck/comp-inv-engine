# Hardware Management System

## Overview

This TypeScript project serves as the first step in my Computer Hardware Store Inventory Management project.

I am using this project to explore the functionality of TypeScript and practice writing full stack applications with React outside of the next.js ecosystem.

## Usage

`npm run dev-cli` to start the CLI app and start local emulator (seeds data)
`npm run cli` to start the CLI app and connect to production server

1. `help` - Display help information
2. `exit` - Exits program and kills emulator
3. `category ls` - Return a list of categories and sub-categories (recursively)
   - `-s, --shallow` - Returns only shallow categories
4. `category add` - Prompts user through adding a new category
   - `-p, --parent <categoryName>` - Creates a category as a child of the provided category
5. `product find` - Return product details, by default expects a product name
   - `-n, --name <productName>` - Searches inventory for a product matching name
   - `-i, --id <productId>` - Searches inventory for a product with provided ID
   - `-c, --category <categoryName>` - Searches inventory for products within provided category (including sub-categories)
   - `-m, --manufacturer [manufacturerName]` - Searches inventory for products by manufacturer name
6. `product add <categoryName>` - Prompts user through adding a product of provided category
7. `product update <productName>` - Prompts user through updating a product by name
   - `--id <productId>` - Accepts a product ID instead of name
8. `manufacturer ls` (`manu ls`) - Lists manufacturers
9. `manufacturer add` (`manu add`) - Prompts user to add a manufacturer

## Development Environment

Developed on Nobara Linux in Visual Studio Code

- **Language:** TypeScript
- **Package Manager:** npm
- **Validation:** Zod
- **Testing:** Vitest
- **Linter:** ESLint with typescript-eslint addon

## Useful Websites

### Tutorials

- [Boot.dev | Learn JavaScript](https://www.boot.dev/courses/learn-javascript)
- [Boot.dev | Learn TypeScript](https://www.boot.dev/courses/learn-http-clients-typescript)
- [Fireship.dev | JavaScript and TypeScript Modules](https://fireship.dev/c/typescript)

### Reference

- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Zod Documentation](http://url.link.goes.here)
- [Vitest Documentation](https://vitest.dev/)

## In Progress

- [x] Hello World and first init
- [ ] Built out classes and types for inventory
- [ ] Add Zod for runtime validation
- [ ] Build out CRUD functions
- [ ] Build testing suite with vitest for CI/CD
- [ ] "Checkout" Function

## Future Work

- Add front-end with Vite.js and React-ts (including user interaction)
- Setup hosting
- Add user authentication
- Add noSQL database
- Convert CRUD operations to tanstack query
- Add React Router
