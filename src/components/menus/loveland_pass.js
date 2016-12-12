import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCheckboxChangeSides } from '../../actions/index.js';
import { handleCheckboxChangeEntrees } from '../../actions/index.js';
import { handleCheckboxChangeSalad } from '../../actions/index.js';
import Bread from './bread';

class Loveland extends Component {
  renderSides(side) {
    return side.map(item => {
      return (
        <p className="checkbox-description" key={item.value}><input onChange={this.props.handleCheckboxChangeSides} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }
  renderSalad(salad) {
    return salad.map(item => {
      return (
        <p key={item.value}><input onChange={this.props.handleCheckboxChangeSalad} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }
  renderEntrees(entree) {
    return entree.map(item => {
      return (
        <p key={item.value}><input onChange={this.props.handleCheckboxChangeEntrees} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }

  render() {
    const propSalad = this.props.salad
    const propEntrees = this.props.entrees
    const propSides = this.props.sides
    console.log(propSalad);
    console.log(propSides);
    console.log(propEntrees);
    //created class to be able to check the defaultChecked value (passed as this.checked)
    class SaladClass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propSalad.indexOf(value) > -1;
      }
    }
    class SideClass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propSides.indexOf(value) > -1;
      }
    }
    class EntreeClass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propEntrees.indexOf(value) > -1;
      }
    }

    const salad = [
      new SaladClass("Mixed greens/cider marinated tomato/cucumber/red onion/balsamic + extra virgin olive oil (gf)", "Mixed greens/cider marinated tomato/cucumber/red onion/balsamic + extra virgin olive oil (gf)"),
      new SaladClass("Caesar salad", "Caesar salad/romaine/roasted cherry tomato/shaved Parmesan (gf)"),
      new SaladClass("Spring mix/shaved carrot/sliced mushroom/scallion/house made Ranch (gf)", "Spring mix/shaved carrot/sliced mushroom/scallion/house made Ranch (gf)"),
    ]
    const sides = [
      new SideClass("Garlic/herb roasted red bliss potato (gf)","Garlic/herb roasted red bliss potato (gf)"),
      new SideClass("Parmesan/buttermilk whipped potato (gf)","Parmesan/buttermilk whipped potato (gf)"),
      new SideClass("Louisiana dirty rice","Louisiana dirty rice/English peas/creole seasoning (gf)"),
      new SideClass("Crispy green beans","Crispy green beans/fire roasted tomato/toasted almond (gf)"),
      new SideClass("Baked beans","Baked beans/pepper bacon/caramelized onion (gf)"),
      new SideClass("Classic Potato Salad - celery hearts","Classic Potato Salad - celery hearts/garlic (gf)"),
      new SideClass("Pesto Pasta Salad - olives","Pesto Pasta Salad - olives / mozzarella / tomato / herbs / lemon"),
      new SideClass("Mini vegetable kebobs","Mini vegetable kebobs/zucchini/summer squash/mushroom/onion/garlic marinade (gf)"),
      new SideClass("Steamed sweet corn (gf)","Steamed sweet corn (gf)"),
      new SideClass("Classic Macaroni + Cheese","Classic Macaroni + Cheese/potato crisp topping")
    ]
    const entrees = [
      new EntreeClass("Pulled pork","Pulled pork/assorted BBQ sauces $6"),
      new EntreeClass("Smoked pork spare ribs","Smoked pork spare ribs $7.50 (gf)"),
      new EntreeClass("Jamaican jerk chicken kebabs & Beef Kebabs","Jamaican jerk chicken kebabs & Beef Kebabs/onion & garlic marinade $10.50 (gf)"),
      new EntreeClass("Bratwurst/milk stout marinade","Bratwurst/milk stout marinade $6.75"),
      new EntreeClass("Pulled pork sliders + Beef sliders","Pulled pork sliders + Beef sliders/appropriate condiments $6.75"),
      new EntreeClass("Cider brined Bacon wrapped Pork Tenderloin","Cider brined Bacon wrapped Pork Tenderloin/mustard BBQ sauce/horseradish cream $7 (gf)"),
      new EntreeClass("Mediterranean chicken breast","Mediterranean chicken breast/garlic/lemon $6 (gf)"),
      new EntreeClass("Flank steak/smoked jalapeno & adobo marinade (gf) or Flank steak/vinegar, onion & garlic marinade","Flank steak/smoked jalapeno & adobo marinade (gf) or Flank steak/vinegar, onion & garlic marinade $8.50 (gf)"),
      new EntreeClass("Chili/garlic/coconut/citrus marinated chicken legs & thighs (gf)","Chili/garlic/coconut/citrus marinated chicken legs & thighs (gf)")
    ]

    return (
      <div>
        <h1 className="titles">Loveland Pass Salads</h1>
        <h5 className="sample-titles">Salads (choose 1 salad + 2 breads) $6</h5>
        {this.renderSalad(salad)}
        < Bread />
        <h1 className="titles">Loveland Pass Sides</h1>
        <h5 className="sample-titles">Sides (choose 1 for $3, 2 for $6, 3 for $9)</h5>
        {this.renderSides(sides)}
        <h1 className="titles">Loveland Pass Entrees</h1>
        <h5 className="sample-titles">Entrees priced individually/prices vary if you choose two or three options</h5>
        {this.renderEntrees(entrees)}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
      salad: state.food.salad,
      sides: state.food.sides,
      entrees: state.food.entrees,
    }
}

export default connect(mapStateToProps, {handleCheckboxChangeSalad,handleCheckboxChangeSides,  handleCheckboxChangeEntrees})(Loveland);
