import React, { Component } from 'react';
import Splash from './splash';
import Contact from './contact';
import Sample from './sample';
import FAQ from './faq';
import Sidebar from './sidebar_home';

export default class Food extends Component {
  constructor(props) {
  super(props);
  this.state = {
    highlight: "home"
  };
  this._changeCourse = this._changeCourse.bind(this);
}
  componentWillMount(){
        window.scrollTo(0, 0)
  }
  _changeCourse(course){
    this.setState({highlight: course});
  }
  chooseInfo(){
    switch(this.state.highlight){
      case "home":
      return (
        <div className="container-with-sidebar">
          <Splash />
        </div>
      )
      case "faq":
      return (
        <div className="container-with-sidebar">
          <FAQ />
        </div>
      )
      case "contact":
      return (
        <div className="container-with-sidebar">
          <Contact />
        </div>
      )
      case "sample":
      return (
        <div className="container-with-sidebar">
          <Sample />
        </div>
      )
      default:
      return (
        <div className="container-with-sidebar">
          <Splash />
        </div>
      )
    }
  }
  render() {

    return(
      <div className="container-outside">
        <Sidebar highlight={this.state.highlight} changeCourse={this._changeCourse}/>
        <div className="container-with-sidebar top-space">
          {this.chooseInfo()}
        </div>
      </div>
    )

  }
}
