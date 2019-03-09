import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './not-found.scss';

class NotFoundComponent extends Component {
  render() {
    return (
      <div className="notFound">
        <h2>Oopps...</h2>
        <p>It seems you've got lost.</p>
        <Link to="/">Go Back!</Link>
      </div>
    );
  }
}

export default NotFoundComponent;
