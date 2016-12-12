import React from 'react';  
import plated from '../resources/plated.png';
import cook from '../resources/cook.png';
import station from '../resources/station.png';
import table from '../resources/table.png';
import van from '../resources/van.png';
import emptyBox from '../resources/empty-box.png';
import checkedBox from '../resources/checked-box.png';
import waiter from '../resources/waiter.png';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectService } from '../actions/index.js';


class Service extends Component {

  componentWillMount(){
        window.scrollTo(0, 0)

  }

  render() {

    return (
      <div className="container gutter">
        <h1 className="titles">
          Your Event
        </h1>
        <div className="container-horiz space-around baseline">
          <img src={plated} alt="plated dishes" className="plated"/>
          <p className="margin-left big-blurb">Ready to get started? We'll walk you through a few simple steps to create an idea for your event. The selections you make now aren't carved in stone and can be changed later on in the process. This information will help us create a package tailored to your specific needs. After you submit your choices, we will review them and contact you shortly with a personal proposal. </p>
        </div>
        <h1>Step One:</h1>
        <div className="container-horiz center">
          <img src={checkedBox} className="checkBox" alt="check box" />
          <h5 className="sample-titles">Choose Your Style of Service</h5>
        </div>
        <div className="container-vert service-table">
          <form>
            <table>
              <thead>
              </thead>
              <tbody>
                <tr onClick={() => this.props.selectService("buffet")}>
                  <td>
                    <img src={cook} alt="chef" className="style-img"/>
                    </td>

                  <td>
                      <h2 className="style-headline">Buffet</h2>
                      <p>Buffets are great for large groups. Since your guests will be going

                         through a line and serving themselves, this option requires the least

                         amount of staffing (save on labor costs!)</p>
                  </td>
                  <td>
                    <img src={this.props.style === "buffet" ? checkedBox : emptyBox} className="checkBox margin-left" alt="box"/>
                  </td>
                </tr>
                <tr onClick={() => this.props.selectService("stations")}>
                  <td>
                    <img src={station} alt="chef" className="style-img"/>
                    </td>
                  <td>
                    <h2 className="style-headline">Stations</h2>
                    <p>Stations are a fun, social, interactive service option for your guests!

                  Choose multiple stations for your main dinner or add a station to your

                  cocktail hour. Chef attended stations can create more interest & action

                  (additional labor charge)</p>
                </td>
                <td>
                    <img src={this.props.style === "stations" ? checkedBox : emptyBox} className="checkBox margin-left" alt="box"/>

                </td>
                </tr>
                <tr onClick={() => this.props.selectService("plated")}>
                  <td>
                    <img src={waiter} alt="waiter" className="style-img"/>
                    </td>
                  <td>
                    <h2 className="style-headline">Plated</h2>
                      <p>Plated service is a more formal style of service. Servers will bring
    beautifully crafted plated meals to each of your guests

    individually. (Requires additional staff for proper execution.)</p>

                </td>
                <td>
                    <img src={this.props.style === "plated" ? checkedBox : emptyBox} className="checkBox margin-left" alt="box"/>
                </td>
                </tr>
                <tr onClick={() => this.props.selectService("family-style")}>
                  <td>
                    <img src={table} alt="table" className="style-img"/>
                    </td>
                  <td>
                    <h2 className="style-headline">Family Style</h2>
                      <p>Family style service promotes conversation and a “family” feel
    at your guest tables. Our servers bring platters of food to each

    guest table; guests will pass the platters around and serve

    themselves. Family style labor costs typically somewhere in

    between a buffet dinner & plated. (Rental costs are a bit higher with family style service.)</p>
                </td>
                <td>
                    <img src={this.props.style === "family-style" ? checkedBox : emptyBox} className="checkBox margin-left" alt="box"/>
                </td>
                </tr>
                <tr onClick={() => this.props.selectService("drop-off")}>
                  <td>
                    <img src={van} alt="van" className="van"/>
                    </td>
                  <td>
                    <h2 className="style-headline">Drop Off Service</h2>
                      <p>  Fresh Tracks can provide a simple drop off & set up service. Please

                        check with your venue to ensure drop off service is allowed.

                        Looking to add some style to your party with fun, compostable

                        products? We have solutions that work with many themes and styles.</p>
                </td>
                <td>
                    <img src={this.props.style === "drop-off" ? checkedBox : emptyBox} className="checkBox margin-left" alt="box"/>
                </td>
                </tr>
              </tbody>
            </table>
          </form>
              <p>Interested in an outdoor barn or backyard wedding? Fresh Tracks

              specializes in “off the grid” locations, creating an elegant event in even

              the most rustic locations.</p>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {style: state.serviceStyle.style}
}

export default connect(mapStateToProps, {selectService})(Service);
