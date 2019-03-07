import React from 'react';
import ReactDOM from 'react-dom';
import MovieCardComponent from './movie-card.component';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MovieCard Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MovieCardComponent movie={{ title: 'Test' }} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
