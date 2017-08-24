import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {

  render() {
    return (
      <div className="NotFound">
        <h1>404: NOT FOUND</h1>
        <h2>You referred to the wrong address.</h2>
      </div>
    );
  }
}

export default NotFound;