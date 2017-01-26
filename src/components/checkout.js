import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { handleAdditionalInfo } from '../actions/index.js';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.addInfo = this.addInfo.bind(this)
  }
  componentWillMount() {
      window.scrollTo(0, 0)
  }
  buildHTML(stuff) {
    const info = this.props.info
    const serviceStyle = this.props.serviceStyle;
    const {clientname, email, numberOfGuests, phone} = this.props.clientInfo;
    return `<div style="background-color: #eee; border: 1px grey solid; padding: 5px">
            <p>service style: ${serviceStyle}</p>
            <p>name: ${clientname}</p>
            <p>email: ${email}</p>
            <p>number of guests: ${numberOfGuests}</p>
            <p>phone number: ${phone}</p>
            <p>additional information: ${info} </p>
            </div>  <div style="background-color: #ddd; border: 1px grey solid; margin-top: 20px; padding: 5px"> ${this.renderULHTML(stuff)}</div>`  ;
  }
  renderULHTML(cat){
    return cat.map((item, idx) => {
      if(item.arr.length > 0){
          return `<h4>${item.category}</h4>
        <ul>${this.renderLIHTML(item.arr)}</ul>`
      } else {
        return `<h4>${item.category}</h4>
      <ul>None</ul>`
      }
    }).join("")
  }
  renderLIHTML(arr) {
    return arr.map((item, idx) => {
        return `<li>${item}</li>`
  }).join("")
}
  renderUL(cat){
    return cat.map((item, idx) => {
      if(item.arr.length > 0){
          return (
            <div key={idx}>
            <h4>{item.category}</h4>
            <ul>{this.renderLI(item.arr)}</ul>
            </div>
          )
      } else {
        return (
          <div key={idx}>
          <h4>{item.category}</h4>
          <ul>None</ul>
          </div>
        )
      }
    })
  }
  renderLI(arr) {
    return arr.map((item, idx) => {
        return (
          <li key={item}>{item}</li>
        )
  })
}
  sendAjax(data, email){
    this.props.sendAjax(data, email)
  }
  addInfo(e){
    this.props.handleAdditionalInfo(e.target.value);
  }
  render() {
    localStorage.setItem("state", JSON.stringify(this.props.state));
    const {appetizers, salad, bread, sides, entrees, glassware, beverages, dessert, munchies, info} = this.props
    const {clientname, email, numberOfGuests, phone} = this.props.clientInfo;
    const stuff = [
          {arr: appetizers, category: "appetizers"},
          {arr: salad, category: "salad"},
          {arr: bread, category: "bread"},
          {arr: sides, category: "sides"},
          {arr: entrees, category: "entrees"},
          {arr: glassware, category: "glassware"},
          {arr: beverages, category: "beverages"},
          {arr: dessert, category: "dessert"},
          {arr: munchies, category: "munchies"},
        ]
        const html = this.buildHTML(stuff)
        const serviceStyle = this.props.serviceStyle

    return (
      <div className="container-with-sidebar">
        <h5>This is the information you will be providing us. If you need to make changes, you can go back using the navigation menu to the left, or the blue buttons below.</h5>
        <div className="grey">
          <p>service style: {serviceStyle}</p>
          <p>name: {clientname}</p>
          <p>email: {email}</p>
          <p>number of guests: {numberOfGuests}</p>
          <p>phone number: {phone}</p>
          {this.renderUL(stuff)}
            <textarea onChange={this.addInfo} className="text-area" placeholder="Any thoughts, comments or questions?" value={this.props.info}/>
          <p><button className="button-send" onClick={() => this.sendAjax(html, clientname)}>Send Info</button></p>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    state: state,
    appetizers: state.food.appetizers,
    beverages: state.food.beverages,
    dessert: state.food.dessert,
    munchies: state.food.munchies,
    glassware: state.food.glassware,
    bread: state.food.bread,
    sides: state.food.sides,
    entrees: state.food.entrees,
    salad: state.food.salad,
    clientInfo: state.clientInfo.info,
    serviceStyle: state.serviceStyle.style,
    info: state.additionalInfo.info
  }
}
export default connect(mapStateToProps, { handleAdditionalInfo })(Checkout);
