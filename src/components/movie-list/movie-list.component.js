import React from 'react';
import { Col } from 'react-bootstrap';
import MovieCard from './../movie-card/movie-card.component';
import LoaderComponent from './../loader/loader.component';

import './movie-list.scss';

const styles = {
  movieColumn: {
    marginBottom: 20
  }
};
const MovieListComponent = ({ movies, isLoading }) => {
  const movieList = movies
    ? movies.map(movie => (
        <Col
          style={styles.movieColumn}
          key={movie.imdbID}
          xs={12}
          sm={4}
          md={3}
          lg={3}
        >
          <MovieCard movie={movie} />
        </Col>
      ))
    : null;

  return (
    <div className="movieList">
      {movieList}
      <LoaderComponent isLoading={isLoading} />
    </div>
  );
};

export default MovieListComponent;
