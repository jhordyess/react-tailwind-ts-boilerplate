# React Tailwind CSS and TypeScript Boilerplate

This is a simple boilerplate project for starting a web development project using React, Typescript, Tailwind CSS, Eslint, Prettier, Husky and Github Pages powered by Vite.

## Features

- [React](https://react.dev/) as the UI library.
- [TypeScript](https://www.typescriptlang.org/) as the programming language.
- [Tailwind CSS](https://tailwindcss.com/) as the CSS framework.
- [Vite](https://vitejs.dev/) as the build tool.
- [Eslint](https://eslint.org/) as the linter.
- [Prettier](https://prettier.io/) as the code formatter.
- [Husky](https://typicode.github.io/husky/) as the Git hooks manager.
- [GitHub Pages](https://pages.github.com/) as the hosting service.

## Getting Started

1. Clone the repository:

```sh
git clone https://github.com/jhordyess/react-tailwind-ts-boilerplate.git
```

2. Navigate to the project folder:

```sh
cd react-tailwind-ts-boilerplate
```

3. Install dependencies:

```sh
yarn

# With npm
npm install
```

4. Start the development server:

```sh
yarn dev

# With npm
npm run dev
```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to see your project.

## Project Structure

```md
react-tailwind-ts-boilerplate/
├── .husky/ Husky configuration folder.
│   ├── pre-push Git hook to run the linter before pushing.
├── src/ Source code folder.
│   ├── Home.tsx Home page component.
│   ├── index.css Global CSS file.
│   ├── main.tsx Main JavaScript file.
│   ├── vite-env.d.ts Vite types file.
├── .eslintrc.json Eslint configuration file.
├── .gitignore Git ignore file.
├── .prettierrc.json Prettier configuration file.
├── index.html Entry point HTML file.
├── package.json Project configuration and dependencies.
├── postcss.config.js PostCSS configuration file.
├── README.md Project README file.
├── tailwind.config.js Tailwind CSS configuration file.
├── tsconfig.json TypeScript configuration file.
├── tsconfig.node.json TypeScript project references configuration file.
├── vite.config.ts Vite configuration file.
```

## Commands

### Start the development server

```sh
yarn dev

# With npm
npm run dev
```

### Build the project for production

```sh
yarn build

# With npm
npm run build
```

### Preview the project before production

```sh
yarn preview

# With npm
npm run preview
```

### Lint the project

```sh
yarn lint

# With npm
npm run lint
```

### Format the project

```sh
yarn format

# With npm
npm run format
```

### Deploy the project to GitHub Pages

```sh
yarn deploy

# With npm
npm run deploy
```

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request.

---

Happy coding!
