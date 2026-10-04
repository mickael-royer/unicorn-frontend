# unicorn-frontend

Ionic + React SPA (Vite, TypeScript, Capacitor), tests with Cypress, lint with ESLint.
Deployed to Azure Static Web Apps (`staticwebapp.config.json`). See ADR 0013.

## Commands
- Load env: `set -a; source .env; set +a` (never read or print .env)
- Dev server: `ionic serve`
- Types: `npx tsc --noEmit`   Lint: `npx eslint src`   E2E: Cypress (see `cypress/`)

## Rules
- Auth0 (PKCE) and Google token flow live in the auth layer; do not bypass them.
- All backend calls go through one API client module. No hard-coded URLs: use env variables.
- Scripts confirmed: `lint` → `eslint`, `test.unit` → `vitest`, `test.e2e` → `cypress run`.
