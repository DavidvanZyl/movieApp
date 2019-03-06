import React from 'react';
import { Card, CardTitle, CardMedia } from 'material-ui';

import './movie-card.scss';

class MovieCardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;

    return (
      <Card className="card">
        <CardMedia
          className="cardMedia"
          overlay={<CardTitle title={movie.Title} />}
        >
          <img className="bgImage" src={movie.Poster} />
        </CardMedia>
      </Card>
    );
  }
}

export default MovieCardComponent;
