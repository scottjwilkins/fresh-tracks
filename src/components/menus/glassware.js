import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCheckboxChangeGlassware } from '../../actions/index.js';

class Glassware extends Component {
  renderGlassware(glass) {
    return glass.map(item => {
      return (
        <p key={item.value}><input onChange={this.props.handleCheckboxChangeGlassware} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }

  render() {
    const propGlass = this.props.glassware
    console.log(propGlass);
    //created class to be able to check the defaultChecked value (passed as this.checked)
    class Glass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propGlass.indexOf(value) > -1;
      }
    }

    const glassware = [
      new Glass("Old Fashioned Glasses + Champagne Flutes","Old Fashioned Glasses + Champagne Flutes $0.95"),
    ];

    return (
      <div>
        <h1 className="titles">Bar Glassware</h1>
        {this.renderGlassware(glassware)}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {glassware: state.food.glassware}
}

export default connect(mapStateToProps, {handleCheckboxChangeGlassware})(Glassware);
