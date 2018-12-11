# TypeScript-React-Redux-Webpack project scaffold
Project scaffold for quickly setting up a TypeScript, React, Redux project with webpack. Including TSLint for extra safety and Mocha+Chai for unit testing.

## Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [React-Redux](https://react-redux.js.org/)
- [TSLint](https://palantir.github.io/tslint/) and [TSLint Immutable](https://github.com/jonaskello/tslint-immutable)
- [Webpack](https://webpack.js.org/)
- [Chai](https://www.chaijs.com/) and [Mocha](https://mochajs.org/)

## Packages
### Development dependencies
- [webpack](https://www.npmjs.com/package/webpack) and [webpack-cli](https://www.npmjs.com/package/webpack-cli)
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin), [style-loader](https://www.npmjs.com/package/style-loader) and [css-loader](https://www.npmjs.com/package/css-loader)
- [tslint](https://www.npmjs.com/package/tslint) and [tslint-immutable](https://www.npmjs.com/package/tslint-immutable)
- [tslint-loader](https://www.npmjs.com/package/tslint-loader)
- [typescript](https://www.npmjs.com/package/typescript)
- [ts-loader](https://www.npmjs.com/package/ts-loader)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [ts-mocha](https://www.npmjs.com/package/ts-mocha)
- [chai](https://www.npmjs.com/package/chai) and [@types/chai](https://www.npmjs.com/package/@types/chai)
- [mocha](https://www.npmjs.com/package/mocha) and [@types/mocha](https://www.npmjs.com/package/@types/mocha)

### Runtime dependencies
- [react](https://www.npmjs.com/package/react) and [@types/react](https://www.npmjs.com/package/@types/react)
- [react-dom](https://www.npmjs.com/package/react-dom) and [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
- [react-redux](https://www.npmjs.com/package/react-redux) and [@types/react-redux](https://www.npmjs.com/package/@types/react-redux)
- [redux](https://www.npmjs.com/package/redux)

## How to use project scaffold
1. Fork this repository or
1. Download the source files
    1. Clone this repository
    1. Delete the *.git* folder and this readme file
    1. Copy source files into your own repository
1. Run command `npm install` to download dependencies
1. Run build process with command `npm run build`
1. Run tests with command `npm test`

## How to reproduce project scaffold manually
1. Initialize npm project with command `npm init`
1. **Important!** create *.gitignore* file and and include following entries:
    - *node_modules*
    - *package-lock.json*
    - *output*
1. Install development dependencies with command `npm i -D package-name`
    - for example: `npm i -D ts-loader`
1. Install runtime dependencies with command `npm i -S package-name`
    - for example: `npm i -S react`
    - install multiple packages at once: `npm i -S react @types/react redux` etc...
1. Setup the following files in project root to configure build process:
    - *webpack.config.js*
    - *tsconfig.json*
    - *tslint.json*
1. Setup the unit test script in *package.json* to consider *.spec.ts* files as test files
