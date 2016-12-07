import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCheckboxChangeBeverages } from '../../actions/index.js';

class Beverages extends Component {
  renderBeverages(bevies) {
    return bevies.map(item => {
      return (
        <p key={item.value}><input onChange={this.props.handleCheckboxChangeBeverages} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }

  render() {
    const propBeverages = this.props.beverages
    console.log(propBeverages);
    //created class to be able to check the defaultChecked value (passed as this.checked)
    class Bevs {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propBeverages.indexOf(value) > -1;
      }
    }

    const beverages = [
      new Bevs("Lavender Lemonade + Pekoe Iced Tea","Lavender Lemonade + Pekoe Iced Tea $1.25"),
      new Bevs("Coffee Bar","Coffee Bar (regular, decaf, sweeteners, cream & mugs) $1.75"),
      new Bevs("Beverage package: lemonade, iced tea & coffee","(Beverage package: lemonade, iced tea & coffee $2.75)"),
      new Bevs("Infused Waters: grapefruit/rosemary and strawberry/lemon/basil","Infused Waters: grapefruit/rosemary and strawberry/lemon/basil $1.00"),
      new Bevs("Bar Mixers + garnish","Bar Mixers + garnish $1.75"),
    ];

    return (
      <div>
        <h1 className="titles">Beverages</h1>
        {this.renderBeverages(beverages)}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {beverages: state.food.beverages}
}

export default connect(mapStateToProps, {handleCheckboxChangeBeverages})(Beverages);
