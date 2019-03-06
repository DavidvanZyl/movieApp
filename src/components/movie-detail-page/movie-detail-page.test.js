import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetailComponent from './movie-detail-page.component';

describe('MovieDetail Component Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MovieDetailComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
