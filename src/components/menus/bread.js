import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCheckboxChangeBread } from '../../actions/index.js';

class Bread extends Component {
  renderBread(bread) {
    return bread.map(item => {
      return (
        <p className="checkbox-description" key={item.value}><input onChange={this.props.handleCheckboxChangeBread} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }

  render() {
    const propBread = this.props.bread
    console.log(propBread);
    //created class to be able to check the defaultChecked value (passed as this.checked)
    class BreadClass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propBread.indexOf(value) > -1;
      }
    }

    const breads = [
      new BreadClass("Lavender sourdough", "Lavender sourdough"),
      new BreadClass("honey whole wheat", "honey whole wheat"),
      new BreadClass("jalapeno cornbread", "jalapeno cornbread"),
      new BreadClass("rosemary parmesan focaccia", "rosemary parmesan focaccia"),
      new BreadClass("Southern style dinner rolls", "Southern style dinner rolls")
    ]

    return (
      <div>
        {this.renderBread(breads)}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {bread: state.food.bread}
}

export default connect(mapStateToProps, {handleCheckboxChangeBread})(Bread);
