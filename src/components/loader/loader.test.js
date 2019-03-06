import React from 'react';
import ReactDOM from 'react-dom';
import LoaderComponent from './loader.component';

describe('Loader Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoaderComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
