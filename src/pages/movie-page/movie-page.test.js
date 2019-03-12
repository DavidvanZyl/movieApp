import React from 'react';
import ReactDOM from 'react-dom';
import { MoviePage } from './movie-page.container';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MoviePage Container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MoviePage searchMovies={{}} movieSearch={{ isLoading: false }} />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
