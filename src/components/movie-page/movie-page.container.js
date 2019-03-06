import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';
import * as movieActions from './../../store/actions/movie-page.actions';
import * as movieHelpers from './movie-page.helper';
import MovieList from './../movie-list/movie-list.component';

import './movie-page.scss';

export class MoviePage extends React.Component {
  render() {
    const { searchMovies, movieSearch } = this.props;
    const movies = movieHelpers.getMoviesList(movieSearch);
    return (
      <div>
        <Row className="header">
          <Col>
            <h2>Movies</h2>
          </Col>
          <Col className="col-3">
            <TextField
              id="search"
              placeholder="Search..."
              autoComplete="off"
              onChange={e => {
                let param = e.currentTarget.value;
                searchMovies(param, 1);
              }}
            />
          </Col>
        </Row>
        <Container>
          <Row>
            <MovieList movies={movies} isLoading={searchMovies.isLoading} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  state => ({
    movieSearch: state.moviePage.movieSearch
  }),
  // Map action creators to properties of our component
  { ...movieActions }
)(MoviePage);
