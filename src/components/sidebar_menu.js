import React, { Component } from 'react';
import gondola from '../resources/gondola.png';
import { selectNavbar } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Sidebar extends Component {
  showAlert() {
    alert("Please select your style of service before continuing")
  }
  handleClick(nav) {
    if (this.props.clientInfo.length < 1) {
      alert("please enter your information");
      return;
    }
    this.props.style ? this.props.changeCourse(nav) : this.showAlert()
  }
  render(){
    return (
      <div className="sidebar">
        <div className="center">
          <div className="gondola-container" onClick={() => {this.props.selectNavbar('home')}}>
            <Link to="/"><img src={gondola} className="gondola" alt="Fresh Tracks Logo"/></Link>
          </div>
          <i className="fa fa-3x fa-cutlery"></i>
        </div>
        <div className={this.props.highlight === "info" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("info")}>
          <nav>About You</nav>
        </div>
        <div className={this.props.highlight === "service" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("service")}>
          <nav>Service Style</nav>
        </div>
        <div className={this.props.highlight === "appetizers" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("appetizers")}>
          <nav>Appetizers</nav>
        </div>
        <div className={this.props.highlight === "dinner" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("dinner")}>
          <nav>Main Courses</nav>
        </div>
        <div className={this.props.highlight === "beverages" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("beverages")}>
          <nav>Beverages</nav>
        </div>
        <div className={this.props.highlight === "desserts" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("desserts")}>
          <nav>Desserts</nav>
        </div>
        <div className={this.props.highlight === "munchies" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("munchies")}>
          <nav>Late Night Munchies</nav>
        </div>
        <div className={this.props.highlight === "checkout" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("checkout")}>
          <nav>Checkout</nav>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    style: state.serviceStyle.style,
    clientInfo: state.clientInfo.info
  }
  }

export default connect(mapStateToProps, { selectNavbar })(Sidebar)
