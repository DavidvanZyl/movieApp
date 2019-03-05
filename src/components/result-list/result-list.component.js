import React from 'react';
import { ResultList } from '@appbaseio/reactivesearch';

export default class ResultListComponent extends React.Component {
  searchParamSet = false;

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        {this.props.show ? (
          <ResultList
            componentId="List"
            dataField="original_title.keyword"
            pagination
            onNoResults="Test"
            className="result"
            size={5}
            react={{
              and: ['search', 'Languages', 'Genres']
            }}
            renderData={res => ({
              title: res.original_title,
              image: res.poster_path,
              description: res.overview
            })}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
