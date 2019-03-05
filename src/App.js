import React from 'react';
import ReactDOM from 'react-dom';
import { ReactiveBase, MultiDropdownList } from '@appbaseio/reactivesearch';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import DataSearchComponent from './components/data-search/data-search.component';

import './App.scss';
import ResultListComponent from './components/result-list/result-list.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <ReactiveBase
        app="MovieListApp"
        credentials="4FA9DpjSD:b9536d65-3185-438d-ab06-9361e24542b1"
        theme={{
          typography: {
            fontFamily:
              '"Lato", "Open Sans", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif'
          }
        }}
      >
        {<DataSearchComponent setSearchParam={this.props.setSearchParam} />}
        <div className="container">
          <div>
            {
              <MultiDropdownList
                componentId="Genres"
                title="Genres"
                dataField="genres.keyword"
                size={100}
                className="filter"
              />
            }
            {
              <MultiDropdownList
                componentId="Languages"
                dataField="original_language.keyword"
                size={100}
                title="Languages"
                className="filter"
              />
            }
          </div>
          <div>{<ResultListComponent show={this.props.searchParam} />}</div>
        </div>
      </ReactiveBase>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

const initialState = {
  searchParam: ''
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      console.log(action.value);
      return Object.assign({}, state, { searchParam: action.value });
    default:
      return state;
  }
};

export const store = createStore(mainReducer);

const mapStateToProps = state => {
  return {
    searchParam: state.searchParam
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchParam: value => {
      dispatch({
        type: 'SEARCH',
        value
      });
    }
  };
};

export const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
