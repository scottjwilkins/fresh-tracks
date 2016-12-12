import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCheckboxChangeDessert } from '../../actions/index.js';

class Dessert extends Component {
  renderDessert(dessert) {
    return dessert.map(item => {
      return (
        <p className="checkbox-description" key={item.value}><input onChange={this.props.handleCheckboxChangeDessert} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }

  render() {
    const propDessert = this.props.dessert
    console.log(propDessert);
    //created class to be able to check the defaultChecked value (passed as this.checked)
    class DessertsClass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propDessert.indexOf(value) > -1;
      }
    }

    const desserts = [
      new DessertsClass("Assorted petit fours, chocolate covered strawberries with sprinkles, French macarons and classic coconut macaroons, lemon bars and pot de crème","Assorted petit fours, chocolate covered strawberries with sprinkles, French macarons and classic coconut macaroons, lemon bars and pot de crème $4"),
      new DessertsClass("Homemade marion berry pie","Homemade marion berry pie $24 each"),
      new DessertsClass("Homemade peach pie","Homemade peach pie $24 each"),
      new DessertsClass("Homemade strawberry rhubarb pie","Homemade strawberry rhubarb pie $24 each"),
      new DessertsClass("Homemade blueberry pie","Homemade blueberry pie $24 each"),
      new DessertsClass("Homemade apple pie","Homemade apple pie $24 each"),
      new DessertsClass("Custard Display: pot de crème, crème brulee with fresh fruit, panna cotta and mini fruit tarts","Custard Display: pot de crème, crème brulee with fresh fruit, panna cotta and mini fruit tarts $4"),
      new DessertsClass("Classic Cheesecake Bar","Classic Cheesecake Bar including fresh raspberry, fresh strawberry, fresh pomegranate, berry compote, warm chocolate sauce, warm caramel sauce $40 per cheesecake"),
      new DessertsClass("“The Comfort Bar” Fresh Tracks handmade small bites","“The Comfort Bar” Fresh Tracks handmade small bites, lemon bars, Mexican brownies, Almond joy bar, assorted mini cupcakes, chocolate dipped strawberries, assorted cookies, berries, Hawaiian magic bars $3.5/person"),
    ];

    return (
      <div className="container-with-sidebar">
        <h1 className="titles">Desserts to accompany cake</h1>
        {this.renderDessert(desserts)}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {dessert: state.food.dessert}
}

export default connect(mapStateToProps, {handleCheckboxChangeDessert})(Dessert);
