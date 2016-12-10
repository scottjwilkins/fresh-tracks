import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
  constructor(props){
    super(props)
  }
  handleClick(e){
    this.props.changeCourse(e)

  }
  render(){
    return (
      <div className="sidebar">
        <i className="fa fa-3x fa-cutlery"></i>
        <div className={this.props.highlight === "appetizers" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("appetizers")}>
          <nav>Appetizers</nav>
        </div>
        <div className={this.props.highlight === "dinner" ? "highlight" : "sidebar-div"}
          onClick={() => this.handleClick("dinner")}>
          <nav>Dinner</nav>
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
