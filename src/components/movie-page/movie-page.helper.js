export const getMoviesList = moviesResponse => {
  return !!moviesResponse &&
    moviesResponse.response &&
    moviesResponse.response.Response !== 'False'
    ? moviesResponse.response.results
    : null;
};
