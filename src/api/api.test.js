import * as api from './api';

describe('API', () => {
  it('should create a correct url', () => {
    const url = api.createMovieDbUrl('test', { test: '123' });
    expect(url).toEqual(
      api.BASE_URL + 'test?apikey=' + api.API_KEY + '&type=movie' + '&test=123'
    );
  });
});
