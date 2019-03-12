import React from 'react';
import { RefreshIndicator } from 'material-ui';
import './loader.scss';

const LoaderComponent = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <RefreshIndicator
        className="loader"
        top={0}
        left={0}
        size={80}
        status={'loading'}
      />
    );
  }
  return children ? children : null;
};

export default LoaderComponent;
