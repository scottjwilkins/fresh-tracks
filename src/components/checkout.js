import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';




class Checkout extends Component {
  buildHTML(stuff) {
    const serviceStyle = this.props.serviceStyle;
    const {clientname, email, numberOfGuests, phone, additionalInfo} = this.props.clientInfo;
    return `<div style="background-color: #eee; border: 1px grey solid; padding: 5px">
            <p>service style: ${serviceStyle}</p>
            <p>name: ${clientname}</p>
            <p>email: ${email}</p>
            <p>number of guests: ${numberOfGuests}</p>
            <p>phone number: ${phone}</p>
            <p>${additionalInfo ? 'additional info: ' + additionalInfo : ''}</p>
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
    $.ajax({
      method: "POST",
      url: "https://nameless-garden-22821.herokuapp.com/",
      //url: "http://localhost:5678/",
      data: JSON.stringify({ text: data, email: email }),
      contentType: "application/json",
    })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  }

  render() {
    const {appetizers, salad, bread, sides, entrees, glassware, beverages, dessert, munchies} = this.props
    const {clientname, email, numberOfGuests, phone, additionalInfo} = this.props.clientInfo;
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
        <p>service style: {serviceStyle}</p>
        <p>name: {clientname}</p>
        <p>email: {email}</p>
        <p>number of guests: {numberOfGuests}</p>
        <p>phone number: {phone}</p>
        <p>{additionalInfo ? 'additional info: ' + additionalInfo : ''}</p>
        {this.renderUL(stuff)}
        <button className="button-start" onClick={() => this.sendAjax(html, clientname)}>Looks good</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
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
    serviceStyle: state.serviceStyle.style
  }
}
export default connect(mapStateToProps)(Checkout);
