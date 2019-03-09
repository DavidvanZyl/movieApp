import React from 'react';
import { getMovieDetails } from '../../api/api';
import { Container, Row, Col } from 'react-bootstrap';

import './movie-detail.scss';
import LoaderComponent from '../../components/loader/loader.component';

class MovieDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const {
      match: { params }
    } = this.props;
    getMovieDetails({ i: params.id })
      .then(response => {
        response.json().then(json => {
          this.setState({ movie: json });
        });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <Container className="movieDetail">
        <Row className="header">
          {!this.state.isLoading ? (
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
          ) : (
            <Col />
          )}
        </Row>
        {!this.state.isLoading ? (
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
              <div className="movieDetail__text--left">
                <p>{this.state.movie.Plot}</p>
              </div>
              <div className="movieDetail__text--left">
                <p>Director(s): {this.state.movie.Director}</p>
              </div>
              <div className="movieDetail__text--left">
                <p>Writer(s): {this.state.movie.Writer}</p>
              </div>
              <div className="movieDetail__text--left">
                <p>Star(s): {this.state.movie.Actors}</p>
              </div>
            </Col>
          </Row>
        ) : (
          <LoaderComponent isLoading={this.state.isLoading} />
        )}
      </Container>
    );
  }
}

export default MovieDetailComponent;
