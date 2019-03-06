import React, { Component } from 'react';
import MoviePage from './components/movie-page/movie-page.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.scss';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MoviePage />
      </MuiThemeProvider>
    );
  }
}

export default App;
