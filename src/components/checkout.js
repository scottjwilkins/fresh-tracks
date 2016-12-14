

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
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
  render() {
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
    return (
      <div className="container-with-sidebar">
        {this.renderUL(stuff)}
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
  }
}
export default connect(mapStateToProps)(Checkout);
