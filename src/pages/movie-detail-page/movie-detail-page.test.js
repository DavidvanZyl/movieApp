import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetailComponent from './movie-detail-page.component';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MovieDetail Component Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MovieDetailComponent match={{ params: { id: 'test' } }} />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
