import React, { Component } from 'react';
import gondola from '../resources/gondola.png';
import { selectNavbar } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Sidebar extends Component {
  handleClick(e){
    this.props.changeCourse(e)
  }
  render(){
    return (
      <div className="sidebar">
        <div className="center">
          <div className="gondola-container" onClick={() => {this.props.selectNavbar('home')}}>
            <Link to="/"><img src={gondola} className="gondola" alt="Fresh Tracks Logo"/></Link>
          </div>
          <i className="fa fa-3x fa-info-circle"></i>
        </div>
        <div className={this.props.highlight === "home" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("home")}>
          <nav>Fresh Weddings</nav>
        </div>
        <div className={this.props.highlight === "faq" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("faq")}>
          <nav>FAQ</nav>
        </div>
        <div className={this.props.highlight === "sample" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("sample")}>
          <nav>Sample Menu</nav>
        </div>
        <div className={this.props.highlight === "contact" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("contact")}>
          <nav>Contact Us</nav>
        </div>
      </div>
    )
  }
}
export default connect(null,{ selectNavbar })(Sidebar)
