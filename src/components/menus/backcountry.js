import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCheckboxChangeSides } from '../../actions/index.js';
import { handleCheckboxChangeEntrees } from '../../actions/index.js';
import { handleCheckboxChangeSalad } from '../../actions/index.js';
import Bread from './bread';

class Backcountry extends Component {
  renderSides(side) {
    return side.map(item => {
      return (
        <p className="checkbox-description" key={item.value}><input onChange={this.props.handleCheckboxChangeSides} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }
  renderSalad(salad) {
    return salad.map(item => {
      return (
        <p key={item.value}><input onChange={this.props.handleCheckboxChangeSalad} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }
  renderEntrees(entree) {
    return entree.map(item => {
      return (
        <p key={item.value}><input onChange={this.props.handleCheckboxChangeEntrees} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }

  render() {
    const propSalad = this.props.salad
    const propEntrees = this.props.entrees
    const propSides = this.props.sides
    console.log(propSalad);
    console.log(propSides);
    console.log(propEntrees);
    //created class to be able to check the defaultChecked value (passed as this.checked)
    class SaladClass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propSalad.indexOf(value) > -1;
      }
    }
    class SideClass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propSides.indexOf(value) > -1;
      }
    }
    class EntreeClass {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propEntrees.indexOf(value) > -1;
      }
    }

    const salad = [
      new SaladClass("Organic arugula/spinach/soft boiled egg","Organic arugula/spinach/soft boiled egg/ avocado/ tomato/ goat cheese/horseradish honey mustard vinaigrette/baked Parmesan crisp (gf)"),
      new SaladClass("Wedge salad","Wedge salad/tomato/red onion marmalade/pepper bacon/cucumber/red pepper coulis/Gorgonzola dressing (gf)"),
      new SaladClass("Baby Kale + Arugula/fresh peaches","Baby Kale + Arugula/fresh peaches, pears or strawberries/candied walnuts/Boulder Mountain goat cheese/red onion marmalade (gf)"),
      new SaladClass("Heritage mix/strawberries/Boulder Mountain goat cheese","Heritage mix/strawberries/Boulder Mountain goat cheese/candied walnuts/balsamic (gf)"),
      new SaladClass("Organic spring mix/arugula/balsamic roasted portabella","Organic spring mix/arugula/balsamic roasted portabella/aged white cheddar/toasted pecan/shaved rainbow carrot/tomato/Roasted garlic honey balsamic vinaigrette (gf)"),
      new SaladClass("Baby Kale + Arugula/roasted beets/gorgonzola","Baby Kale + Arugula/roasted beets/gorgonzola/rainbow carrots/dried cranberries/red wine oregano vinaigrette (gf)")
    ]
    const sides = [
      new SideClass("Assorted grilled veggies","Assorted grilled veggies/lemon/extra virgin olive oil (gf)"),
      new SideClass("Red curry rainbow carrots","Red curry rainbow carrots/ginger English pea butter (gf)"),
      new SideClass("Crispy Brussels sprouts","Crispy Brussels sprouts/pepper bacon/caramelized shallot (gf)"),
      new SideClass("Lemon + Goat Cheese Potato Gratin","Lemon + Goat Cheese Potato Gratin/sweet onion/basil (gf)"),
      new SideClass("Roasted Hatch Chili + Asadero Cheese Potato Gratin","Roasted Hatch Chili + Asadero Cheese Potato Gratin/sweet onion/cilantro (spicy!) (gf)"),
      new SideClass("Eggplant + Tomato gratin","Eggplant + Tomato gratin/Italian herbs/bread crumbs/Parmesan (gf)"),
      new SideClass("Twice Baked Potato","Twice Baked Potato/pepper bacon/Asadero cheese/scallion/sour cream (gf)"),
      new SideClass("Fresh Crudité Platter","Fresh Crudité Platter/fresh veggies (gf)"),
      new SideClass("Cheesy cauliflower gratin (gf)","Cheesy cauliflower gratin (gf)"),
      new SideClass("Roasted broccoli/parmesan/roasted garlic emulsion (gf)","Roasted broccoli/parmesan/roasted garlic emulsion (gf)"),
      new SideClass("Vegetable kebabs","Vegetable kebabs/lemon/garlic/oregano marinade (gf)"),
      new SideClass("Southern style dirty brown rice","Southern style dirty brown rice/Creole spices/bruinoise veggies/herbs/roasted tomato (gf)")
    ]
    const entreesPoultry = [
      new EntreeClass("Stuffed French Chicken Breast","Stuffed French Chicken Breast/spinach/brie $8"),
      new EntreeClass("Mediterranean chicken breast","Mediterranean chicken breast/garlic/onion/lemon/extra virgin olive oil/roasted cherry tomato $6 (gf)"),
      new EntreeClass("Fresh Tracks Buttermilk Fried Chicken","Fresh Tracks Buttermilk Fried Chicken (fried on site, minimum orders apply) $7"),
      new EntreeClass("Classic Chicken Parmesan","Classic Chicken Parmesan/sweet basil tomato sauce/mozzarella/house made bread crumbs $6.75"),
      new EntreeClass("Lightly Breaded Chicken Picatta","Lightly Breaded Chicken Picatta/lemon caper white wine sauce/fried shallot $6.75"),
      new EntreeClass("House chicken/whole chicken marinated in coconut milk","House chicken/whole chicken marinated in coconut milk/scallion/ginger/garlic/red chili/mix of dark and white meat $6.75"),
      new EntreeClass("Pecan smoked chicken","Pecan smoked chicken/white meat & dark meat/Sweet n sticky BBQ sauce/mustard BBQ & Carolina BBQ $7"),
      new EntreeClass("Portuguese Braised skin on bone in chicken & prosciutto","Portuguese Braised skin on bone in chicken & prosciutto/white & dark meat/dry sherry/paprika/tomato/roasted red pepper $9"),
    ]
    const entreesPork = [
      new EntreeClass("one In Pork Chop","Bone In Pork Chop/rosemary allspice brine $14 (gf)"),
      new EntreeClass("Cider Brined Pepper bacon wrapped Pork Tenderloin $8 (gf)","Cider Brined Pepper bacon wrapped Pork Tenderloin $8 (gf)"),
      new EntreeClass("Pork Tenderloin/smoked jalapeno + garlic","Pork Tenderloin/smoked jalapeno + garlic – minimum order applies $8 (gf)"),
      new EntreeClass("Braised Pork Shank/hatch chilies/adobo demi","Braised Pork Shank/hatch chilies/adobo demi $8 (gf)"),
      new EntreeClass("Moroccan brined thick center cut pork loin","Moroccan brined thick center cut pork loin/pepper seared/pineapple mango chutney $9"),
      new EntreeClass("Pork roulade/roasted red pepper","Pork roulade/roasted red pepper/organic baby spinach/mushroom duxelle/apricot bacon emulsion $9"),
    ]
    const entreesVegetarian = [
      new EntreeClass("Eggplant Parmesan","Eggplant Parmesan/crispy eggplant/red sauce/cheese blend $6"),
      new EntreeClass("Stuffed Bell peppers","Stuffed Bell peppers/brown rice/Parmesan/mushrooms/herbs/garlic $5.50 (gf)"),
      new EntreeClass("Stuffed Portabella Mushroom","Stuffed Portabella Mushroom/roasted red pepper/feta/Italian herbs $5.50"),
      new EntreeClass("Roasted Pablano baked chili rellano","Roasted Pablano baked chili rellano/chili roasted sweet potato/veggies/Mexican cheese/Chili red sauce $9 (Can be vegan) (gf)"),
      new EntreeClass("Heirloom tomato cashew cream tart","Heirloom tomato cashew cream tart/balsamic roasted Oyster mushrooms/grilled asparagus $13 (vegan)"),
      new EntreeClass("Carolina gold rice stuffed portabella","Carolina gold rice stuffed portabella/roasted beets/crispy potato strings/roasted red pepper ginger emulsion $13 (vegan) (gf)"),
    ]
    const entreesSeafood = [
      new EntreeClass("Salmon/honey mustard glaze","Salmon/honey mustard glaze $9 (gf)"),
      new EntreeClass("New England Baked Haddock","New England Baked Haddock/house made breadcrumbs/Chardonnay butter $7"),
      new EntreeClass("Red Snapper","Red Snapper/lemon/extra virgin olive oil $11 (gf)"),
      new EntreeClass("“Margarita Shrimp”","“Margarita Shrimp”/pepper smoked bacon/tomato/cilantro/avocado/tequila $10.25 (gf)"),
      new EntreeClass("Creole Shrimp Kebabs","Creole Shrimp Kebabs/pineapple/peppers $10.25 (gf)"),
      new EntreeClass("Mussels/tomato white wine reduction","Mussels/tomato white wine reduction $6.75 (gf)"),
      new EntreeClass("Pepper seared Cod","Pepper seared Cod/creamy stone ground grits/Creole spiced tomato $9 (gf)"),
    ]
    const entreesBeef = [
      new EntreeClass("Flat Iron Steak","Flat Iron Steak $12.75 (gf)"),
      new EntreeClass("Flank Steak/smoked jalapeno marinade","Flank Steak/smoked jalapeno marinade $8.50 (gf)"),
      new EntreeClass("Flank Steak/garlic + onion marinade","Flank Steak/garlic + onion marinade $8.50 (gf)"),
      new EntreeClass("NY Strip Steak ","NY Strip Steak $11.75 (gf)"),
      new EntreeClass("Short Ribs/red wine demi reduction","Short Ribs/red wine demi reduction $13.50 (gf)"),
      new EntreeClass("Hanging Beef Tenderloin","Hanging Beef Tenderloin $11 (gf)"),
      new EntreeClass("Prime rib","Prime rib $16"),
      new EntreeClass("Short rib beef Bourguigon/red wine braise","Short rib beef Bourguigon/red wine braise $14.50"),
      new EntreeClass("Cajun marinated beef tenderloin","Cajun marinated beef tenderloin/creole crawfish compound butter $15 (gf)"),
    ]

    return (
      <div>
        <h1 className="titles">Backcountry Salads</h1>
        <h5 className="sample-titles">Salads (choose 1 salad + 2 breads) $7</h5>
        {this.renderSalad(salad)}
        < Bread />
        <h1 className="titles">Backcountry Sides</h1>
        <h5 className="sample-titles">Sides (choose 1 for $3.75, 2 for $7.25, 3 for $10)</h5>
        {this.renderSides(sides)}
        <h1 className="titles">Backcountry Entrees</h1>
        <h5 className="sample-titles">(Prices may vary if you choose two proteins)</h5>
        <h5 className="sample-titles">POULTRY</h5>
        {this.renderEntrees(entreesPoultry)}
        <h5 className="sample-titles">PORK</h5>
        {this.renderEntrees(entreesPork)}
        <h5 className="sample-titles">VEGETARIAN</h5>
        {this.renderEntrees(entreesVegetarian)}
        <h5 className="sample-titles">FISH + SEAFOOD</h5>
        {this.renderEntrees(entreesSeafood)}
        <p className="warning">Sauces: horseradish cream * Au Poivre * chimichurri * Dijon blue cheese sherry (Available to try at tasting)</p>
        <h5 className="sample-titles">BEEF</h5>
        {this.renderEntrees(entreesBeef)}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
      salad: state.food.salad,
      sides: state.food.sides,
      entrees: state.food.entrees,
    }
}

export default connect(mapStateToProps, {handleCheckboxChangeSalad,handleCheckboxChangeSides,  handleCheckboxChangeEntrees})(Backcountry);
