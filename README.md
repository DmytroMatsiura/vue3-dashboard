# vue3-dashboard

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Husky and Commit Conventions

This project uses Husky to manage Git hooks and enforce commit message conventions.

### Setting Up Husky

Husky is already configured in this project. To ensure Husky hooks are installed, run:

```sh
npm run prepare
```

### Commit Message Convention

Commit messages should follow the conventional commits format. The commit message should start with one of the following types:

- `feat`: A new feature
- `fix`: A bug fix
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify `src` or `test` files
- `docs`: Documentation only changes
- `test`: Adding missing tests or correcting existing tests
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `build`: Changes that affect the build system or external dependencies
- `revert`: Reverts a previous commit

Example commit message:

```
feat(router): add new route for user profile
```

Husky will automatically check your commit messages against these conventions and prevent commits that do not follow the rules.
