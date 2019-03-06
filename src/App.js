import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MoviePage from './components/movie-page/movie-page.container';
import './App.scss';
import NotFoundComponent from './components/not-found/not-found.component';
import MovieDetailComponent from './components/movie-detail-page/movie-detail-page.component';

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
