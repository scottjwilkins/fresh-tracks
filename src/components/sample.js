import React, { Component } from 'react';
export default class Sample extends Component {
  componentWillMount() {
    window.scrollTo(0 ,0)
  }
  render(){
    return (
      <div className="container">
        <h1 className="titles">Sample Menu</h1>
        <div className="fancy-border container-horiz center">

          <div className="inside-fancy-border">
            <h5 className="sample-titles center-text">Passed Appetizers</h5>

            <p className="center-text">Bacon wrapped Italian bread sticks/ sugar/spices</p>

            <p className="center-text">Chicken skewers /garlic/lemon/oregano/extra virgin olive oil/truffle aioli</p>

            <h5 className="sample-titles center-text">Dinner Buffet</h5>

            <p className="center-text">Baby Kale + Arugula/fresh peaches, pears or strawberries/candied walnuts/Boulder Mountain</p>

            <p className="center-text">goat cheese/red onion marmalade (gf)</p>

            <p className="center-text">Rosemary parmesan focaccia * Southern style dinner rolls</p>

            <p className="center-text">Crispy Brussels sprouts/pepper bacon (gf)</p>

            <p className="center-text">Lemon and Goat Cheese Potato Gratin/sweet onion/basil (gf)</p>

            <p className="center-text">Stuffed French Chicken Breast/spinach/brie</p>

            <p className="center-text">Hanging Beef Tenderloin/horseradish cream</p>

            <h5 className="sample-titles center-text">Beverages</h5>

            <p className="center-text">Lavender lemonade, Pekoe iced tea & coffee bar</p>

            <h5 className="sample-titles center-text">Rentals</h5>

            <p className="center-text">Fresh Tracks to supply tableware, silverware, water goblet, wine glass</p>

            <p className="center-text">Outsourced rentals – linens for guest seating & perimeter tables, linen napkins</p>

            <h5 className="sample-titles center-text">Labor</h5>

            <p className="center-text">Chef, servers, bartenders & Fresh Coordinator</p>

            <p className="center-text">$60 per person based on a 100 person wedding. Taxes, catering surcharge etc. are not

              included and vary by venue</p>
          </div>
        </div>
      </div>
    )
    }
}
