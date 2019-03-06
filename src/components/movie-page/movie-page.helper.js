/**
 * Check the response from the api and if it was successful
 * return the results or null.
 * Make sure the img source for the poster is null for those
 * where it is not present to prevent incorrect display.
 *
 * @param moviesResponse Promise response
 */
export const getMoviesList = moviesResponse => {
  return !!moviesResponse &&
    moviesResponse.response &&
    moviesResponse.response.Response !== 'False'
    ? moviesResponse.response.results.map(movie => {
        movie.Poster = movie.Poster === 'N/A' ? null : movie.Poster;
        return movie;
      })
    : null;
};
