import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';




class Checkout extends Component {
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
            <h4 key={item.category}>{item.category}</h4>
            <ul key={idx+100}>{this.renderLI(item.arr)}</ul>
            </div>
          )
      } else {
        return (
          <div key={idx}>
          <h4 key={item.category}>{item.category}</h4>
          <ul key={idx + 100}>None</ul>
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
  sendAjax(data){
    $.ajax({
      method: "POST",
      url: "https://nameless-garden-22821.herokuapp.com/",
      data: JSON.stringify({text: data}),
      contentType: "application/json",
    })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  }

  render() {
    console.log("email " + this.props.clientInfo.clientname);
    const stuff = [
          {arr: this.props.appetizers, category: "appetizers"},
          {arr: this.props.salad, category: "salad"},
          {arr: this.props.bread, category: "bread"},
          {arr: this.props.sides, category: "sides"},
          {arr: this.props.entrees, category: "entrees"},
          {arr: this.props.glassware, category: "glassware"},
          {arr: this.props.beverages, category: "beverages"},
          {arr: this.props.dessert, category: "dessert"},
          {arr: this.props.munchies, category: "munchies"},
        ]
        const html = this.renderULHTML(stuff);

    return (
      <div className="container-with-sidebar">
        {this.renderUL(stuff)}
        <button className="button-start" onClick={() => this.sendAjax(html)}>Looks good</button>
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
    clientInfo: state.clientInfo.info
  }
}
export default connect(mapStateToProps)(Checkout);
