import React, { Component } from 'react';
import gondola from '../resources/gondola.png';
import { selectNavbar } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Sidebar extends Component {
  handleClick(e){
    this.props.changeCourse(e)
  }
  showAlert() {
    alert("Please select your style of service before continuing")
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
        <div className={this.props.highlight === "service" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("service")}>
          <nav>Service Style</nav>
        </div>
        <div className={this.props.highlight === "appetizers" ? "highlight" : "sidebar-div"}
          onClick={this.props.style ? () => this.handleClick("appetizers") : () => this.showAlert()}>
          <nav>Appetizers</nav>
        </div>
        <div className={this.props.highlight === "dinner" ? "highlight" : "sidebar-div"}
          onClick={this.props.style ? () => this.handleClick("dinner") : () => this.showAlert()}>
          <nav>Main Courses</nav>
        </div>
        <div className={this.props.highlight === "beverages" ? "highlight" : "sidebar-div"}
          onClick={this.props.style ? () => this.handleClick("beverages") : () => this.showAlert()}>
          <nav>Beverages</nav>
        </div>
        <div className={this.props.highlight === "desserts" ? "highlight" : "sidebar-div"}
          onClick={this.props.style ? () => this.handleClick("desserts") : () => this.showAlert()}>
          <nav>Desserts</nav>
        </div>
        <div className={this.props.highlight === "munchies" ? "highlight" : "sidebar-div"}
          onClick={this.props.style ? () => this.handleClick("munchies") : () => this.showAlert()}>
          <nav>Late Night Munchies</nav>
        </div>
        <div className={this.props.highlight === "checkout" ? "highlight" : "sidebar-div"}
          onClick={this.props.style ? () => this.handleClick("checkout") : () => this.showAlert()}>
          <nav>Checkout</nav>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    style: state.serviceStyle.style}
  }

export default connect(mapStateToProps, { selectNavbar })(Sidebar)
