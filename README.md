# Snowpack template

A snowpack template using React, TailwindCSS, and TypeScript

## Scripts

### npm start / yarn start / pnpm start

Starts the dev server

### npm run build / yarn build / pnpm build

Builds the project to the build folder

## BaseURL

Added a baseURL argument to tsconfig.json. Allows for direct paths rather than relative paths. Comment it in if desired.

i.e. if referring to "./src/index.tsx", instead simply "index.tsx" suffices.
