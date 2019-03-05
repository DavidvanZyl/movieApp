import React from 'react';
import { DataSearch } from '@appbaseio/reactivesearch';

export default class DataSearchComponent extends React.Component {
  searchParamSet = false;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DataSearch
        componentId="search"
        onValueChange={value => this.props.setSearchParam(value)}
        dataField={[
          'overview',
          'original_title',
          'original_title.keyword',
          'original_title.search',
          'overview.keyword',
          'overview.search'
        ]}
        fieldWeights={[2, 2, 1, 1, 1, 1]}
        fuzziness={0}
        highlight={false}
        autosuggest={false}
        queryFormat="and"
        highlightField={['original_title', 'overview']}
        placeholder="Search movies"
        title="Movie Search"
      />
    );
  }
}
