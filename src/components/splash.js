import React, { Component } from 'react';
import dave from '../resources/dave.png';
import salad from '../resources/fresh_salad.png';
import piechart from '../resources/piechart.png';
import { connect } from 'react-redux';
import { selectNavbar } from '../actions/index.js';
import { Link } from 'react-router';
//build a global state for navbar and attach at 81. callback function to change
//state. gotta write function, make container component
class Splash extends Component {
  componentWillMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="container-vert">
      <h1 className="titles">Fresh Weddings</h1>
      <img className="salad" src={salad} alt="fresh salad" />
      <h2 className="big-blurb gutter">
      Thank you for your interest in Fresh weddings! A member of our team will
      call you soon to see if you have any questions, or if you’d like us to
      prepare a custom proposal for you.
      </h2>
      <div className="container-horiz">
      <div className="container">
      <img className="dave" src={dave} alt="Chef Dave" />
      <small className="center-text smaller-text">Chef Dave Pruett in action</small>
      </div>
      <p className="testimonial">“You guys were AMAZING!! The whole day went so seamlessly

      for us and all the staff was so helpful and professional the

      entire day. The food was awesome (I had been looking forward

        to it since our tasting) and you guys did not disappoint! All of

        our friends had such nice things to say and it was all because

        of your teams hard work that night. Please tell all the staff

        how thankful we were to have you guys there for our big

        day. ” – Laura, bride June 2015</p>
        </div>
        <div className="container-vert top-margin">
        <div className="top-margin"></div>
        <small className="gray">Questions? Check out our FAQ page or contact our catering team at <a href="mailto:freshtracksfoods@gmail.com">freshtracksfoods@gmail.com</a> or 303-526-0511</small>
        <div className="top-margin"></div>
        <p className="top-margin testimonial">“Thank you again for making our special day so magical. The food was amazing and the service was

        stellar.” – Michelle, bride June 2015</p>
        <div className="top-margin"></div>
        <h1 className="titles center-text">About Fresh Weddings</h1>
        <div className="top-margin"></div>
        <p>Get Fresh for your wedding! We love catering weddings, and work closely with our clients to ensure we create a

        unique experience and delicious food that you and your guests will never forget! We understand that having so many

        delicious menu options can be overwhelming, so we have outlined the process of building your menu in this packet.

        Please expect a phone call from us to see if we can answer any questions or help in any way.</p>
        <p>
        Below is a pie chart to help you create a budget for your big day. Each wedding is distinct & there are many variables

        that will affect the cost of your wedding. As you can see, the reception (venue + catering) typically account for a

        large percentage of the total budget. The catering cost breaks down approximately as follows:
        </p>
        </div>
        <div className="gutter container">
        <h5 className="sample-titles">Total Catering Bill</h5>
        <p>Food 60%</p>
        <p className="center-text">Labor 20% (chefs, professional servers, TIPS certified bartenders, Fresh Coordinator)</p>
        <p className="center-text">Rentals 20% (tableware, glassware, linens for guest seating & perimeter tables, linen napkins)</p>
        <img className="piechart" src={piechart} alt="piechart" />
        </div>
        <div className="margin-top"></div>
        <p className="testimonial">“Dave and his staff from Fresh Tracks are all amazing! Their professionalism, responsiveness, care to

        detail and passion about good food made our wedding day perfect. Everyone mentioned how good the

        food was and people were commenting about how great the food was 3 days after our wedding. Once

        we put our trust in the hands of the Fresh Tracks team, we were taken care of every step of the way.

        Thank you Fresh Tracks!” – Allegra, bride June 2015</p>
        <Link to="/menu"><button
        onClick={() => {this.props.selectNavbar("menu")}}className="button-start">Let's Get Started <i className="fa fa-angle-right"></i></button></Link>
        </div>
      )
  }
}
function mapStateToProps(state){
  return {navbar: state.navbar.choice
  }
}
export default connect(mapStateToProps, { selectNavbar })(Splash)
