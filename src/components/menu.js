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
import InfoSent from './info_sent';
import $ from 'jquery';

class Food extends Component {
  constructor(props) {
  super(props);
  this.state = {
    highlight: "info"
  };
  this._changeCourse = this._changeCourse.bind(this);
  this.sendAjax = this.sendAjax.bind(this);
}
sendAjax(data, email){
  this.setState({highlight: "sent"}, () => {
    $.ajax({
      method: "POST",
      url: "https://nameless-garden-22821.herokuapp.com/",
      //url: "http://localhost:5678/",
      data: JSON.stringify({ text: data, email: email }),
      contentType: "application/json",
    }).fail((data) => {
      console.log(data);
    }).done(() => {
      console.log(data)
    })
  })

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
              <button className="button-start top-margin"
              onClick={()=>{this.props.style ? this.setState({highlight: "appetizers"}) :
              this.setState({highlight: "service"})}}>Next <i className="white fa fa-angle-right"></i></button>
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
              <div className="container-horiz">

                <button onClick={()=>{this.setState({highlight: "service"})}} className="button-start"><i className="white fa fa-angle-left"></i> Service Style</button>
                <button onClick={()=>{this.setState({highlight: "dinner"})}} className="button-start">Main Courses <i className="white fa fa-angle-right"></i></button>
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
              <div className="container-horiz">
                <button onClick={()=>{this.setState({highlight: "dinner"})}} className="button-start"><i className="white fa fa-angle-left"></i> Main Courses</button>
                <button onClick={()=>{this.setState({highlight: "desserts"})}} className="button-start">Desserts <i className="white fa fa-angle-right"></i></button>
              </div>
            </div>
        </div>
      )
      case "munchies":
      return (
        <div className="container">
          <Munchies />
          <div className="container-with-sidebar">
            <div className="container-horiz">
              <button onClick={()=>{this.setState({highlight: "desserts"})}} className="button-start"><i className="white fa fa-angle-left"></i> Desserts</button>
              <button onClick={()=>{this.setState({highlight: "checkout"})}} className="button-start">Checkout <i className="white fa fa-angle-right"></i></button>
            </div>
          </div>
        </div>
      )
      case "desserts":
      return (
        <div className="container">
          <Desserts />
          <div className="container-with-sidebar">
            <div className="container-horiz">
              <button onClick={()=>{this.setState({highlight: "beverages"})}} className="button-start"><i className="white fa fa-angle-left"></i> Beverages</button>
              <button onClick={()=>{this.setState({highlight: "munchies"})}} className="button-start">Late Night Munchies <i className="white fa fa-angle-right"></i></button>
            </div>
          </div>
        </div>
      )
      case "info":
      return (
        <div className="container">
          <ClientInfo changeCourse={this._changeCourse.bind(this)}/>
          <div className="container-with-sidebar">
          </div>
        </div>
      )
      case "sent":
      return (
      <InfoSent />
      )
      case "dinner":
      return (
        <div className="container">
          <Buffet/>
          <div className="container-with-sidebar">
            <div className="container-horiz">
              <button onClick={()=>{this.setState({highlight: "appetizers"})}} className="button-start"><i className="white fa fa-angle-left"></i> Appetizers</button>
              <button onClick={()=>{this.setState({highlight: "beverages"})}} className="button-start">Beverages <i className="white fa fa-angle-right"></i></button>
            </div>
          </div>
        </div>
      )
      case "checkout":
      return (
        <div className="container">
          <Checkout sendAjax={this.sendAjax}/>
          <div className="container-with-sidebar">
            <div className="container-horiz">
              <button onClick={()=>{this.setState({highlight: "munchies"})}} className="button-start"><i className="white fa fa-angle-left"></i> Late Night Munchies</button>
            </div>
          </div>
        </div>
      )
      default:
      return (
        <div className="container">
          <Appetizers />
            <div className="container-with-sidebar">
              <div className="container-horiz">
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
