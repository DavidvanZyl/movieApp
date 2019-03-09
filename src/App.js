import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MoviePage from './pages/movie-page/movie-page.container';
import NotFoundComponent from './pages/not-found/not-found.component';
import MovieDetailComponent from './pages/movie-detail-page/movie-detail-page.component';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MoviePage} />
          <Route exact path="/movie/:id" component={MovieDetailComponent} />
          <Route path="/" component={NotFoundComponent} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
