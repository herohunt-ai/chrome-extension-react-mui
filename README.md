# HeroHunt.ai Chrome Extension Template – React & MUI

> The [Create React App](https://create-react-app.dev/) of the extension world

Start building your Chrome extension quickly with this modern template, including [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [MUI](https://mui.com/) and more!

## 📦 Included libraries & tools

- [**TypeScript**](https://www.typescriptlang.org/)
- [**Webpack**](https://webpack.js.org/)
- [**esbuild-loader**](https://github.com/privatenumber/esbuild-loader)
- [**React**](https://react.dev/)
- [**MUI**](https://mui.com/)
- [**SVGR**](https://react-svgr.com/)
- [**ESLint**](https://eslint.org/)
- [**Prettier**](https://prettier.io/)

## ✨ Features

- ⚛️ Build a beautiful UI with [React](https://react.dev/) and [MUI](https://mui.com/) – or use any other component library you like
- 🛠️ Use any NPM package and split your code with [Webpack](https://webpack.js.org/)
- ⚡️ See your changes quickly with blazing fast builds – rebuild in less than 150 ms thanks to [esbuild-loader](https://github.com/privatenumber/esbuild-loader)
- 📄 Customize the `manifest.json` for production and development
- 👻 Inject UI without CSS conflicts thanks to the [Shadow DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- 📂 Include SVG images like React components with [SVGR](https://react-svgr.com/)
- 💯 Avoid bugs and ensure great code quality with [TypeScript](https://www.typescriptlang.org/), [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

## 🚦 How to use

> This guide uses [Yarn](https://classic.yarnpkg.com/lang/en/) which is recommended. The template was not tested with other package managers.

### Install dependencies

```bash
yarn install
```

### Develop

```bash
yarn watch
```

The extension will be built to the `dist` subdirectory and rebuilt on code changes. [Load it in your browser](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) and start developing!

### Check for issues

```bash
yarn lint
```

This will run the TypeScript compiler, ESBuild and Prettier.

### Build

```bash
yarn build
```

An optimized production version will be built to the `dist` directory. Now [release it](https://developer.chrome.com/docs/webstore/publish)!

## 🗃️ Project structure

```
📦chrome-extension-react-mui
 ├ 📂manifest
 │ ├ 📜manifest.common.json         Base `manifest.json`
 │ ├ 📜manifest.development.json    `manifest.json` overrides for development
 │ └ 📜manifest.production.json     `manifest.json` overrides for production
 ├ 📂src
 │ ├ 📂action                       Browser action popup content with React
 │ ├ 📂background                   Background script
 │ ├ 📂content-script               Content script with React injection
 │ ├ 📜custom.d.ts                  TypeScript definition for SVG imports
 │ └ 📜theme.ts                     MUI theme definition
 └ 📂static
   ├ 📜icon[size].png               Extension icons
   └ 📜popup.html                   Browser action popup entry file
```

## Recommended configuration

- [Extensions Reloader Chrome extension](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid)
- [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint VS Code extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
