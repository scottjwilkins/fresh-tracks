import React, { Component } from 'react';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
