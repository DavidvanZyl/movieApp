# Searchable Movie List with Detail Page

A page linked to [OMBD](http://omdbapi.com/) which lets you search for movies by title. You can click on one of the results to
see more information about the movie.

## Getting Started

### Prerequisites

What things you need to install the software and how to install them

[NodeJS](https://nodejs.org/en/) - The node package manager, Yarn should work fine too if you prefer it.

### Installing

Once you've downloaded or cloned the repo all you need to do is run:

#### `npm i`

### Running a development environment

#### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Built With

- [ReactJS](https://reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces.
- [ReduxJS](https://redux.js.org/introduction/getting-started) - A predictable state container for JavaScript apps.
- [React-Router](https://reacttraining.com/react-router/web/guides/quick-start) - A popular declarative router for React.
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk) - Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests. Used here particularly for the async requests to the API by having action creators that return fucntions rather than plain actions.

- [Jest](https://jestjs.io/docs/en/getting-started) - Test framework that comes with React
- [Enzyme](https://github.com/airbnb/enzyme) - Test utility from AirBnB

- [MaterialUI](https://material-ui.com/getting-started/installation/) - The world's most popular React UI framework.\*
- [SCSS](https://sass-lang.com/install) - Powerful professional grade CSS extension language.

### Next Steps:

- Add Filters
- Swap Bootstrap for Flex/Grid
- Add [Sinon](https://sinonjs.org/) and maybe [Chai](https://www.chaijs.com/)?

### Authors

- **David van Zyl** - [GitHub](https://github.com/DavidvanZyl)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

\*According to themselves - I haven't seen the data so don't quote me.
