import React from 'react';
import ReactDOM from 'react-dom';
import MovieListComponent from './movie-list.component';

describe('MovieList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MovieListComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
