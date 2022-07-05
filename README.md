# Template Bhai

Description: TBD

## Important
This project is a monorepo created using [Turborepo](https://turborepo.org/).
Monorepo is a collection of different projects that are built using the same codebase.
This allows us to have reusable components and packages that can be used by all projects.

If you are working on a template that doesn't have any dependencies in the monorepo, you can simply
treat it as a normal project. CD into the project and run `yarn dev` as usual.

## Getting Started

- To install dependencies run `yarn install`
- To develop all projects run `yarn dev`
- To work on a specific app or package, cd to the respective directory and run `yarn dev`
- To build all projects run `yarn build`

## Creating a New Static Template

If you want to start working on your own template, you can simply create a new directory in the static folder.

### Example Using Vite & TailwindCSS
1. run `cd static`
2. run `yarn create vite`
3. Name your template
4. Select `vanilla` as the framework
5. run `cd {your_project_name}`
6. create postcss.config.js file
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```
7. create tailwind.config.js file
```js
module.exports = {
  content: ["./**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```
8. Add TailwindCSS derictive files to style.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
9. We're done! Run `yarn install` in the root project directory, then cd into your project and run `yarn dev`

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a stub [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `template`: a stub [Tailwind CSS](https://tailwindcss.com/) & [Vite](https://vitejs.dev/) template

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```console
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```console
npx turbo link
```

