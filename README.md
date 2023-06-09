This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Boilerplate Template for NextJs 13 with Storybook

This project is pre-configured with pre-hooks using _huskie_ that include the following checks:

- **commit-message**: commit message format validation
- **pre-commit**: eslint check
- **pre-push**: build checks

## Commit message format

Default commit messages should start with one of the following prefixes:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

Note: above commit message format can be modified in `commitlint.config.js`

Unused variables can be escaped with and `_` (trailing underscore)


## Getting Started

To get started, follow these steps:

1. Clone this repository.
2. Remove the existing git remote origin `git remote remove origin`.
3. Add a new git remote for your own repository `git remote add origin <your-github-repo-url>`.
4. Install dependencies using `npm install`.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Storybook

This project also includes Storybook, a UI component development environment. To start Storybook, run the following command:

```bash
npm run storybook
# or
yarn storybook
```

Storybook should start up and be available at `http://localhost:6006`. You can explore the various components and view their documentation and usage examples.

## VSCode Debugger

The VSCode debugger is also set up for this project. You can find the debugger configuration in the `.vscode` folder.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
