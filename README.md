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
    ├── public # Public files
    ├── src # Source files
    ├── _.config.js, ._, \*.json # Config files
    └── README.md

### React source files

    src
    ├── components # Reusable components.
    | ├── Component # Folder to structure components or similar
    | | ├── Component.tsx # Component code
    | | ├── index.tsx # The default export
    | | └── variables.ts # Component specific variables
    | └── variables.ts # Common variables such as colors and spacings.
    ├── features # Feature based components etc.
    │ └── Feature # The feature folder
    │   ├── components # Subfolder to structure subcomponents or similar
    │   ├── Feature.tsx # React code for the feature
    │   └── index.tsx # The default export
    ├── store # Redux functionalities folder
    | ├── api # files related to API calls
    | | ├── types.ts # The data types for api calls
    | | └── weather.ts # The API calls
    | ├──  hooks # Redux hooks folder
    | | └── hooks.ts # Hooks, might be redundant
    | ├── reducers # The reducers folder
    | | ├── appReducer.ts # Update the state of the app
    | | └── weatherReducer.ts # Update the state of the weather data
    | ├── fetchWeather.ts
    | └── store.ts
    ├── tests # tests folder
    | ├── jest # jest tests
    | | ├── Feature of Component # folder for each tested feature or component
    | | | ├── __snapshots__ # saved snapshots for testing
    | | | └── Component.test.tsx # test file for the component
    ├── utils # util functions folder
    ├── App.tsx # Main App component
    └── index.tsx # The main React mounting point

## Usage

### Prerequirities

Project uses [git-hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) for pre-commit linting checks. Please initialize git-hooks locally as following:

`git config core.hooksPath .githooks`

### How to run the project?

1. Install node packages `npm i`
1. Run tests `npm run test`
1. Start the development server `npm run start`

## End-to-end tests

## License

MIT license.
