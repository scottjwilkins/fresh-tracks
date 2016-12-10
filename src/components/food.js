import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectService } from '../actions/index';
import Appetizers from './menus/appetizers';
import Backcountry from './menus/backcountry';
import Beverages from './menus/beverages';
import Bread from './menus/bread';
import Desserts from './menus/desserts';
import Glassware from './menus/glassware';
import Loveland from './menus/loveland_pass';
import Munchies from './menus/munchies';
import Buffet from './buffet';
import Sidebar from './sidebar';
import gondola from '../resources/gondola.png';
class Food extends Component {
  constructor(props) {
  super(props);
  this.state = {
    highlight: "appetizers"
  };
  this._changeCourse = this._changeCourse.bind(this);
}
  componentWillMount(){
        window.scrollTo(0, 0)
  }
  _changeCourse(course){
    this.setState({highlight: course});
  }
  chooseMenu(){
    switch(this.state.highlight){
      case "appetizers":
      return <Appetizers />
      case "beverages":
      return <Beverages />
      case "munchies":
      return <Munchies />
      case "desserts":
      return <Desserts />
      case "dinner":
      return (
        <div>
          <Buffet/>
        </div>
      )
      default:
      return <Appetizers />
    }
  }
  render() {

    return(
      <div className="container-outside">
        <Sidebar highlight={this.state.highlight} changeCourse={this._changeCourse}/>
        <div className="container-with-sidebar">
          <div className="container-vert">

            <img src={gondola} className="gondola" alt="fresh tracks logo" />
          </div>
          {this.chooseMenu()}
        </div>
      </div>
    )

  }
}
function mapStateToProps(state) {
  return {
    style: state.serviceStyle.style
  }
}

export default connect(mapStateToProps)(Food);
