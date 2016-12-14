import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCheckboxChangeMunchies } from '../../actions/index.js';

class Munchies extends Component {
  componentWillMount(){
        window.scrollTo(0, 0)
  }
  renderMunchies(munchies) {
    return munchies.map(item => {
      return (
        <p className="checkbox-description" key={item.value}><input onChange={this.props.handleCheckboxChangeMunchies} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }

  render() {
    const propMunchies = this.props.munchies
    //created class to be able to check the defaultChecked value (passed as this.checked)
    class MunchiesClass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propMunchies.indexOf(value) > -1;
      }
    }

    const munchiesSavory = [
      new MunchiesClass("Fried Chicken Tenders & Waffles","Fried Chicken Tenders & Waffles/chipotle maple syrup"),
      new MunchiesClass("Fresh Tracks Grilled Cheese Lavender sourdough","Fresh Tracks Grilled Cheese Lavender sourdough/house mustard/garlic butter/Gruyere cheese"),
      new MunchiesClass("Southern Style Dinner Roll Burger","Southern Style Dinner Roll Burger House pickles/ketchup/Farmhouse cheddar"),
      new MunchiesClass("Bring Back the Nacho Carnitas","Bring Back the Nacho Carnitas/Fresh Tracks green chili/Mexican cheese/pico de gallo/ancho sour cream"),
      new MunchiesClass("Loaded Poutine/cheese curds/gravy","Loaded Poutine/cheese curds/gravy"),
      new MunchiesClass("Derby Day Biscuit Sliders","Derby Day Biscuit Sliders"),
      new MunchiesClass("Japanese cured ham/blue cheese butter/fig jam","Japanese cured ham/blue cheese butter/fig jam"),
      new MunchiesClass("Philly Cheesesteak Stuffed Macaroni & Cheese","Philly Cheesesteak Stuffed Macaroni & Cheese"),
      new MunchiesClass("Vietnamese Pho Shooters","Vietnamese Pho Shooters/Vietnamese meatballs/rice dumpling"),
      new MunchiesClass("Street Style Tacos carnitas","Street Style Tacos carnitas/roasted onion/pico de gallo/corn tortilla/shredded jalapeno cabbage"),
      new MunchiesClass("Street Style Tacos shredded beef","Street Style Tacos shredded beef/roasted onion/pico de gallo/corn tortilla/shredded jalapeno cabbage"),
      new MunchiesClass("Street Style Tacos pulled chicken","Street Style Tacos pulled chicken/roasted onion/pico de gallo/corn tortilla/shredded jalapeno cabbage"),
      new MunchiesClass("Steamed Chinese Dim Sum Buns","Steamed Chinese Dim Sum Buns/hoisin glaze beef/wilted jalapeno cabbage/Ancho"),
    ];
    const munchiesSweet = [
      new MunchiesClass("House Made PB+J","House Made PB+J/roasted peanut butter/strawberry jam/white bread"),
      new MunchiesClass("Boston Cream Pie","Boston Cream Pie/chocolate sauce"),
      new MunchiesClass("Key Lime Pie","Key Lime Pie/fresh Chantilly cream"),
      new MunchiesClass("Churros + Chocolate","Churros + Chocolate"),
      new MunchiesClass("Creme Brulee","Creme Brulee"),
      new MunchiesClass("Fresh berries","Fresh berries"),
      new MunchiesClass("S'mores Pots de Crème","S'mores Pots de Crème/classic French chocolate custard/graham cracker crumbs/toasted marshmallow"),
    ];

    return (
      <div className="container-with-sidebar">
        <h1 className="titles">Late Night Munchies</h1>
        <h5 className="sample-titles">Savory</h5>
        {this.renderMunchies(munchiesSavory)}

        <h5 className="sample-titles">Sweet</h5>
        {this.renderMunchies(munchiesSweet)}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {munchies: state.food.munchies}
}

export default connect(mapStateToProps, {handleCheckboxChangeMunchies})(Munchies);
