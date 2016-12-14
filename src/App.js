import React, { Component } from 'react';
import Navbar from './components/Navbar';
import $ from 'jquery';
export default class App extends Component {
  componentWillMount() {
    $(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".navbar").show();
    } else {
        $(".navbar").fadeOut("slow");
    }
    this.previousTop = currentTop;
});
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
