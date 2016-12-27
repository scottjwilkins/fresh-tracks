import React, { Component } from 'react';
import { connect } from 'react-redux';
import Appetizers from './menus/appetizers';
import Beverages from './menus/beverages';
import Desserts from './menus/desserts';
import Glassware from './menus/glassware';
import Munchies from './menus/munchies';
import Buffet from './menus/buffet';
import Checkout from '../components/checkout';
import Sidebar from './sidebar_menu';
import Service from './service_style';
import rightArrow from '../resources/right_arrow.png';
import leftArrow from '../resources/left_arrow.png';
import ClientInfo from './client_info';

class Food extends Component {
  constructor(props) {
  super(props);
  this.state = {
    highlight: "info"
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
      case "service":
      return (
        <div className="container">
          <Service />
            <div className="container-with-sidebar ">
              <div className="container-vert">
              <button className="button-start"
              onClick={()=>{this.props.style ? this.setState({highlight: "appetizers"}) :
              this.setState({highlight: "service"})}}>Next <i className="fa fa-angle-right"></i></button>
              <p className="warning">{this.props.style ? "" : "(please make a selection to proceed)"}</p>
              <br></br>
              </div>
            </div>
        </div>
      )
      case "appetizers":
      return (
        <div className="container">
          <Appetizers />
            <div className="container-with-sidebar">
              <div className="container-horiz space-around">
                <img onClick={()=>{this.setState({highlight: "service"})}} className="arrow" src={leftArrow} alt="next" />
                <img onClick={()=>{this.setState({highlight: "dinner"})}} className="arrow" src={rightArrow} alt="next" />
              </div>
            </div>
        </div>
      )

      case "beverages":
      return (
        <div className="container">
          <Beverages />
          <Glassware />
            <div className="container-with-sidebar">
              <div className="container-horiz space-around">
                <img onClick={()=>{this.setState({highlight: "dinner"})}} className="arrow" src={leftArrow} alt="next" />
                <img onClick={()=>{this.setState({highlight: "desserts"})}} className="arrow" src={rightArrow} alt="next" />
              </div>
            </div>
        </div>
      )
      case "munchies":
      return (
        <div className="container">
          <Munchies />
          <div className="container-with-sidebar">
            <div className="container-horiz space-around">
              <img onClick={()=>{this.setState({highlight: "desserts"})}} className="arrow" src={leftArrow} alt="next" />
              <img onClick={()=>{this.setState({highlight: "munchies"})}} className="arrow" src={rightArrow} alt="next" />
            </div>
          </div>
        </div>
      )
      case "desserts":
      return (
        <div className="container">
          <Desserts />
          <div className="container-with-sidebar">
            <div className="container-horiz space-around">
              <img onClick={()=>{this.setState({highlight: "beverages"})}} className="arrow" src={leftArrow} alt="next" />
              <img onClick={()=>{this.setState({highlight: "munchies"})}} className="arrow" src={rightArrow} alt="next" />
            </div>
          </div>
        </div>
      )
      case "info":
      return (
        <div className="container">
          <ClientInfo />
          <div className="container-with-sidebar">
            <div className="container-horiz space-around">
              <img onClick={()=>{this.setState({highlight: "beverages"})}} className="arrow" src={leftArrow} alt="next" />
              <img onClick={()=>{this.setState({highlight: "munchies"})}} className="arrow" src={rightArrow} alt="next" />
            </div>
          </div>
        </div>
      )
      case "dinner":
      return (
        <div className="container">
          <Buffet/>
          <div className="container-with-sidebar">
            <div className="container-horiz space-around">
              <img onClick={()=>{this.setState({highlight: "appetizers"})}} className="arrow" src={leftArrow} alt="next" />
              <img onClick={()=>{this.setState({highlight: "beverages"})}} className="arrow" src={rightArrow} alt="next" />
            </div>
          </div>
        </div>
      )
      case "checkout":
      return (
        <div className="container">
          <Checkout />
          <div className="container-with-sidebar">
            <div className="container-horiz space-around">
              <img onClick={()=>{this.setState({highlight: "appetizers"})}} className="arrow" src={leftArrow} alt="next" />
              <img onClick={()=>{this.setState({highlight: "beverages"})}} className="arrow" src={rightArrow} alt="next" />
            </div>
          </div>
        </div>
      )
      default:
      return (
        <div className="container">
          <Appetizers />
            <div className="container-with-sidebar">
              <div className="container-horiz space-around">
                <img onClick={()=>{this.setState({highlight: "dinner"})}} className="arrow" src={rightArrow} alt="next" />
              </div>
            </div>
        </div>
      )
    }
  }
  render() {

    return(
      <div className="container-outside">
        <Sidebar highlight={this.state.highlight} changeCourse={this._changeCourse}/>
        <div className="container-with-sidebar top-space">
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
