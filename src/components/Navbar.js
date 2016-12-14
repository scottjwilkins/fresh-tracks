import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { selectNavbar } from '../actions/index.js';

class Navbar extends Component {

  render(){

    return (
      <div className="container-outside space-around navbar fixed">
        <div className="navbar-spacer"></div>
        <Link to="/" className={this.props.navbar === "home" ? "navbar-div-highlight" : "navbar-div"}
            onClick={() => {this.props.selectNavbar("home")}}>
            Home
        </Link>
        <Link to="/menu"
          className={this.props.navbar === "menu" ? "navbar-div-highlight" : "navbar-div"}
            onClick={() => {this.props.selectNavbar("menu")}}>
            Build Your Menu
        </Link>
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {navbar: state.navbar.choice}
}
export default connect(mapStateToProps, { selectNavbar })(Navbar)
