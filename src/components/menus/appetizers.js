import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCheckboxChangeApp } from '../../actions/index.js';


class Appetizers extends Component {
  componentWillMount(){
    window.scrollTo(0, 0)
  }
  renderAppetizers(apps) {
    return apps.map(app => {
      return (
        <p className="checkbox-description" key={app.value}><input onChange={this.props.handleCheckboxChangeApp} defaultChecked={app.checked} type="checkbox" value={app.value} />{app.description}</p>
      )
    })
  }
  render() {
  const propApps = this.props.apps

  //created class to be able to check the defaultChecked value (passed as this.checked)
  class App {
    constructor(value, description) {
      this.value = value;
      this.description = description;
      this.checked = propApps.indexOf(value) > -1;
    }
  }

  const passedApps = [
    new App("Domestic Cheese", "Domestic Cheese/assorted crackers $4"),
    new App("Antipasti Board", "Antipasti Board/cured meats/mustard/garnish $6.50"),
    new App("Fresh Crudité", "Fresh Crudité $4.50 (gf)"),
    new App("Crudité Platter/hummus/artichokes/spinach dip/House sourdough bread sticks", "Crudité Platter/hummus/artichokes/spinach dip/House sourdough bread sticks $5.50 (gf)"),
    new App("Taste of Colorado: Wild Game brats & local sausages",
    "Taste of Colorado: Wild Game brats & local sausages/house mustards/house pickles/pickled peppers/relish/crisp bread/beer braised onions & kraut $7/person (gf)")
    ]

  const vegApps = [
    new App("Garlic naan flat bread pizza","Garlic naan flat bread pizza/veggies/parmesan"),
    new App("Sweet relish and onion deviled eggs (gf)","Sweet relish and onion deviled eggs (gf)"),
    new App("Roasted leek and sweet potato dumplings","Roasted leek and sweet potato dumplings/ginger soy dip"),
    new App("Caramelized onion and Boursin stuffed cherry tomato (gf)","Caramelized onion and Boursin stuffed cherry tomato (gf)"),
    new App("Fresh Tracks Bloody Mary shooters","Fresh Tracks Bloody Mary shooters/celery hearts/pickled peppers/blues cheese stuffed   olives/romaine (gf)"),
    new App("Vegetarian Eggrolls","Vegetarian Eggrolls/wilted cabbage/mushroom/English peas/sweet chili dip"),
    new App("Antipasto skewers","Antipasto skewers/balsamic marinated mushrooms/Bocconcini mozzarella /cherry tomato"),
    new App("Lemon herb goat cheese stuffed Jalapeno rellenos (gf)","Lemon herb goat cheese stuffed Jalapeno rellenos (gf)"),
    new App("Warm coconut curry tomato soup","Warm coconut curry tomato soup/grilled cheese bite/shot glasses"),
    new App("Warm lemon herb goat cheese","Warm lemon herb goat cheese/sun dried tomato/smoked eggplant/flatbread"),
    new App("English cucumber and champagne gazpacho","English cucumber and champagne gazpacho/cucumber onion relish/shot glasses (gf)"),
    new App("Tomato gazpacho","Tomato gazpacho/fresh diced tomato/sweet basil/shot glasses (gf)"),
    new App("Mushroom risotto","Mushroom risotto/deep fried/Italian red sauce"),
    new App("House gnocchi","House gnocchi/pesto parmesan reduction"),
    new App("English pea stuffed heirloom cherry tomato (gf)","English pea stuffed heirloom cherry tomato (gf)"),
    new App("Fried green tomato","Fried green tomato/cornmeal crusted/warm lemon goat cheese")
  ];

  const chickenApps = [
    new App("BBQ spiced chicken meatballs","BBQ spiced chicken meatballs/Gorgonzola sauce"),
    new App("Roasted jalapeno chicken eggrolls","Roasted jalapeno chicken eggrolls/cabbage/ancho BBQ sauce"),
    new App("Chicken and roasted green chili quesadillas","Chicken and roasted green chili quesadillas/chipotle sour cream"),
    new App("Chicken skewers","Chicken skewers/garlic/lemon/oregano/extra virgin olive oil/truffle aioli (gf)"),
    new App("Fried mini chicken wings","Fried mini chicken wings/sweet n sticky BBQ sauce"),
    new App("Spicy Jamaican jerk chicken kebabs","Spicy Jamaican jerk chicken kebabs/pineapple/bell pepper (gf)"),
    new App("Mini Indian tikka masala tacos on garlic naan","Mini Indian tikka masala tacos on garlic naan/mint chutney"),
    new App("Fried chicken and waffles","Fried chicken and waffles/chili maple glaze/shot glasses"),
    new App("Braised pulled chicken tostada","Braised pulled chicken tostada/refried white beans/ancho/cilantro lime cabbage/fried corn tortilla (gf)"),
  ];

  const meatApps = [
    new App("Mini beef wellingtons wrapped in puff pastry","Mini beef wellingtons wrapped in puff pastry/dijonaise/mushroom duxelle"),
    new App("Vietnamese marinated flank steak satay","Vietnamese marinated flank steak satay/ginger soy"),
    new App("Mini cheese burger bites","Mini cheese burger bites/southern style mini buns/truffle aioli/cheese"),
    new App("Tequila lime marinated flank steak skewers","Tequila lime marinated flank steak skewers/chimichurri sauce (gf)"),
    new App("Mini Shepherd’s pie “muffins”","Mini Shepherd’s pie “muffins”/toasted shallot whipped potato"),
    new App("Mini corned beef Reuben quesadillas","Mini corned beef Reuben quesadillas/sauerkraut/special sauce"),
    new App("Street style barbacoa tacos","Street style barbacoa tacos/crumbled Mexican cheese/roasted onion/pico/habanero cream/flour tortilla"),
    new App("Vietnamese pickled beef salad","Vietnamese pickled beef salad/cilantro/lime/endive leaf (gf)"),
    new App("Mini buffalo burgers","Mini buffalo burgers/house made pickle/mustard sauce/mini southern style bun"),
    new App("Mini classic lamb gyros","Mini classic lamb gyros/tzatziki/marinated cucumber/tomato/flatbread"),
    new App("Mini all beef hotdog sliders","Mini all beef hotdog sliders/honey mustard/Indian tomato dahl relish"),
    new App("Mediterranean lamb meatballs","Mediterranean lamb meatballs/live/feta puree/tzatziki sauce"),
    new App("Philly cheese steak mac N cheese bites","Philly cheese steak mac N cheese bites"),
    new App("Chinese Dim Sum","Chinese Dim Sum/ginger beef stuffed steamed buns/sweet soy"),
    new App("“Chinese hamburger”","“Chinese hamburger”/jalapeno/ginger/onion ground hoisin ground beef stuffed Sweet buns/soy dip"),
  ];
  const seafoodApps = [
    new App("Colorado Honey Smoked salmon","Colorado Honey Smoked salmon/rice flour potato pancake/chive/sour cream (gf)"),
    new App("Mini Maryland fried crab cakes","Mini Maryland fried crab cakes/remoulade"),
    new App("Southwestern fried crab cakes","Southwestern fried crab cakes/roasted Hatch chilies/sweet corn/mango sour cream"),
    new App("Pepper seared ahi tuna","Pepper seared ahi tuna/spicy avocado/mango salsa/tasting spoon (gf)"),
    new App("Spicy tuna sushi roll","Spicy tuna sushi roll/spicy aioli/tobiko (gf)"),
    new App("Rainbow sushi rolls","Rainbow sushi rolls/avocado/scallion/crab/spicy aioli (gf)"),
    new App("California sushi roll","California sushi roll/tobiko/spicy avocado (gf)"),
    new App("Crab and shallot salad","Crab and shallot salad/fresh herbs/chive/lemon/tasting spoon"),
    new App("Cod fish taco","Cod fish taco/mango salsa/pickled jalapeno/remoulade/flour tortilla"),
    new App("Shrimp ceviche","Shrimp ceviche/citrus/red onion/cilantro/scallion/fried shallot/tasting spoon (gf)"),
    new App("Tuna Tartare","Tuna Tartare/avocado puree/sesame/shallot/lemon/crispy celery root chip (gf)"),
    new App("Pepper bacon wrapped scallops","Pepper bacon wrapped scallops/Asian soy citrus glaze (gf)"),
    new App("Chilled shrimp scampi","Chilled shrimp scampi/white wine/parsley/garlic/tasting spoon (gf)"),
    new App("Low Country Shrimp & Grits","Low Country Shrimp & Grits/roasted mirepoix/crispy ham (gf)"),
  ];
    return (
      <div className="container-with-sidebar">
      <h1 className="titles">Appetizers</h1>
      <i>Displayed Appetizers – per person</i>
      {this.renderAppetizers(passedApps)}
      <br />
      <hr></hr>
      <br />
      <i>Passed Appetizers for up to 1 hour</i>
      <h5 className="sample-titles">VEGETARIAN</h5>
      {this.renderAppetizers(vegApps)}
      <h5 className="sample-titles">CHICKEN</h5>
      {this.renderAppetizers(chickenApps)}
      <h5 className="sample-titles">BEEF/BISON/LAMB</h5>
      {this.renderAppetizers(meatApps)}
      <h5 className="sample-titles">SEAFOOD</h5>
      {this.renderAppetizers(seafoodApps)}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {apps: state.food.appetizers}
}

export default connect(mapStateToProps, {handleCheckboxChangeApp})(Appetizers);
