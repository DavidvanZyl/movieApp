import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';
import * as movieActions from './../../store/actions/movie-page.actions';
import * as movieHelpers from './movie-page.helper';
import MovieList from './../../components/movie-list/movie-list.component';
import './movie-page.scss';

export class MoviePage extends React.Component {
  render() {
    const { searchMovies, movieSearch } = this.props;
    const movies = movieHelpers.getMoviesList(movieSearch);
    return (
      <div className="moviePage">
        <Row className="header">
          <Col xs={12} sm={12} md={8} lg={9}>
            <h2>Movies</h2>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3}>
            <TextField
              className="moviePage__search"
              id="search"
              placeholder="Search..."
              autoComplete="off"
              onChange={e => searchMovies(e.currentTarget.value, 1)}
            />
          </Col>
        </Row>
        <div className="movies">
          <MovieList movies={movies} isLoading={movieSearch.isLoading} />
        </div>
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
