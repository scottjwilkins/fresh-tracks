import React, { Component } from 'react';

export default class Sidebar extends Component {

  handleClick(e){
    this.props.changeCourse(e)

  }
  render(){
    return (
      <div className="sidebar">
        <div className="center">
          <i className="fa fa-3x fa-cutlery"></i>
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
