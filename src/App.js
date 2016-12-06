import React, { Component } from 'react';
import gondola from './resources/gondola.png';
import Navbar from './components/Navbar.js';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="container-vert">
          <img src={gondola} className="gondola" alt="fresh tracks logo" />
        </div>
        {this.props.children}
      </div>
    );
  }
}
