# TypeScript-React-Redux-Webpack project scaffold
Project scaffold for quickly setting up a TypeScript, React, Redux project with webpack. Including TSLint for extra safety and Mocha+Chai for unit testing. Project uses CSS modules to avoid namespace collisions with CSS classes.

## Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [React-Redux](https://react-redux.js.org/)
- [TSLint](https://palantir.github.io/tslint/) and [TSLint Immutable](https://github.com/jonaskello/tslint-immutable)
- [Webpack](https://webpack.js.org/)
- [Chai](https://www.chaijs.com/) and [Mocha](https://mochajs.org/)

## How to use project scaffold
1. Fork this repository or
1. Download the source files
    1. Clone this repository
    1. Delete the *.git* folder and this readme file
    1. Copy source files into your own repository
1. Run download dependencies with command:
    ```
    npm install
    ```
1. Run automatic development build process with command:
    ```
    npm run dev
    ```
1. Run build process for release with command:
    ```
    npm run release
    ```
    *optimized output appears in *dist* folder*
1. Run tests with command:
    ```
    npm test
    ```
1. Start dev server with command:
    ```
    npm run server
    ```

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
