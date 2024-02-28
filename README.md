# Weather app README



## Dependencies

The project depends on the following libraries:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Styled-components](https://styled-components.com/)
- [Redux](https://redux.js.org/)
- [React-router](https://reactrouter.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

## Project structure

### Top level

    .
    ├── dist # Compiled files
    ├── cypress # Cypress and e2e-tests
    ├── src # Source files
    ├── tools # Tools and utilities
    ├── _.config.js, ._, \*.json # Config files
    └── README.md

### React source files

    src
    ├── features # Feature based components etc.
    │ Feature # The feature folder
    │ ├── api # Feature's API related stuff
    │ ├── SubComponent # Subfolder to structure subcomponents or similar
    │ ├── Feature.tsx # React code for the feature
    │ ├── \*.test.ts(x) # Unittest for the corresponding code
    │ └── index.tsx # The default export
    ├── hooks # Custom react hooks
    ├── login # Static login page
    ├── register # Static registration page
    ├── static # Static assets (fonts, images, locales, styles)
    ├── App.tsx # Main App component
    ├── index.html # The main index.html
    ├── index.tsx # The main React mounting point
    └── store.ts # Redux store

## Usage

### Prerequirities

Project uses [git-hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) for pre-commit linting checks. Please initialize git-hooks locally as following:

`git config core.hooksPath .githooks`

### How to run the project?

1. Install node packages `npm i`
1. Run tests `npm run test`
1. Start the development server `npm run start`

## End-to-end tests


## Development

1. Create a branch with your name and a name which describes the change for example john/add-login-page
1. Make your changes (code changes, tests and documentation)
1. Create a pull request and find a reviewer

## Releasing

TODO

## License

MIT license.
