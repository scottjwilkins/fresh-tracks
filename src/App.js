import React, { Component } from 'react';
import gondola from './resources/gondola.png';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-vert">
          <div className="bar"></div>
          <img src={gondola} className="gondola" alt="fresh tracks logo" />
        </div>
        {this.props.children}
      </div>
    );
  }
}
