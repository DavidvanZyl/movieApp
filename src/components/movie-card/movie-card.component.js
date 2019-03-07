import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardMedia } from 'material-ui';

import './movie-card.scss';

class MovieCardComponent extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Link to={`/movie/${movie.imdbID}`}>
        <Card className="card">
          <CardMedia
            className="cardMedia"
            overlay={<CardTitle title={movie.Title} />}
          >
            {movie.Poster ? (
              <img
                className="bgImage"
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
              />
            ) : (
              <div />
            )}
          </CardMedia>
        </Card>
      </Link>
    );
  }
}

export default MovieCardComponent;
