const API_KEY = '410daa44'; //ADD API KEY
const BASE_URL = 'http://www.omdbapi.com/';

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${BASE_URL}${relativeUrl}?apikey=${API_KEY}&type=movie`;
  if (queryParams) {
    Object.keys(queryParams).forEach(
      paramName => (baseUrl += `&${paramName}=${queryParams[paramName]}`)
    );
  }
  return baseUrl;
};

export const searchMovies = async ({ page, s }) => {
  const fullUrl = createMovieDbUrl('', {
    page,
    s
  });
  return fetch(fullUrl);
};

export const getMovieDetails = async ({ i }) => {
  const fullUrl = createMovieDbUrl('', {
    i
  });
  return fetch(fullUrl);
};
