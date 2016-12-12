
import React, { Component } from 'react';
import Loveland from './loveland_pass';
import Backcountry from './backcountry';

export default class Buffet extends Component {
    componentWillMount(){
      window.scrollTo(0, 0)
    }
    render() {
      return (
        <div className="container-with-sidebar">
          <h1 className="titles">Loveland Pass Buffet</h1>
          <Loveland />
          <h1 className="titles">Backcountry Buffet</h1>
          <Backcountry />
        </div>
      )
    }
}
