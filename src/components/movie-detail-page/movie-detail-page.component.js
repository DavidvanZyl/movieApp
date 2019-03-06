import React from 'react';
import { getMovieDetails } from '../../api/api';
import { Container, Row, Col } from 'react-bootstrap';

import './movie-detail.scss';

class MovieDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ''
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    getMovieDetails({ i: params.id }).then(response => {
      response.json().then(json => {
        this.setState({ movie: json });
      });
    });
  }

  render() {
    return (
      <Container className="movieDetail">
        <Row className="header">
          <Col>
            <Row>
              <h2>{this.state.movie.Title}</h2>
              <h4>({this.state.movie.Year})</h4>
            </Row>
            <Row className="movieDetail__meta">
              <p>{this.state.movie.Rated} |</p>
              <p>{this.state.movie.Runtime} |</p>
              <p>{this.state.movie.Genre} |</p>
              <p>{this.state.movie.Released}</p>
            </Row>
          </Col>
        </Row>
        <Row className="movieDetail__content">
          <Col className="posterImage" xs={12} sm={12} md={6} lg={5}>
            <img
              className="bgImage"
              src={this.state.movie.Poster}
              alt={`${this.state.movie.Title} Poster`}
            />
          </Col>
          <Col
            className="movieDetail__contentText"
            xs={12}
            sm={12}
            md={6}
            lg={7}
          >
            <Row className="movieDetail__text">
              <p>{this.state.movie.Plot}</p>
            </Row>
            <Row className="movieDetail__text">
              <p>Director(s): {this.state.movie.Director}</p>
            </Row>
            <Row className="movieDetail__text">
              <p>Writer(s): {this.state.movie.Writer}</p>
            </Row>
            <Row className="movieDetail__text">
              <p>Star(s): {this.state.movie.Actors}</p>
            </Row>
          </Col>
        </Row>
        <Row />
      </Container>
    );
  }
}

export default MovieDetailComponent;
