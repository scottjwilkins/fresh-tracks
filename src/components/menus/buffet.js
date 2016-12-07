import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleCheckboxChangeBuffet } from '../../actions/index.js';

class Buffet extends Component {
  renderBuffet(buffet) {
    return buffet.map(item => {
      return (
        <p key={item.value}><input onChange={this.props.handleCheckboxChangeBuffet} defaultChecked={item.checked} type="checkbox" value={item.value} />{item.description}</p>
      )
    })
  }

  render() {
    const propBuffet = this.props.buffet
    console.log(propBuffet);
    //created class to be able to check the defaultChecked value (passed as this.checked)
    class Buff {
      constructor(value, description) {
        this.value = value;
        this.description = description;
        this.checked = propBuffet.indexOf(value) > -1;
      }
    }

    const breads = [
      new Buff("Lavender sourdough", "Lavender sourdough"),
      new Buff("honey whole wheat", "honey whole wheat"),
      new Buff("jalapeno cornbread", "jalapeno cornbread"),
      new Buff("rosemary parmesan focaccia", "rosemary parmesan focaccia"),
      new Buff("Southern style dinner rolls", "Southern style dinner rolls")
    ]
    const LovelandSalad = [
      new Buff("Mixed greens/cider marinated tomato/cucumber/red onion/balsamic + extra virgin olive oil (gf)", "Mixed greens/cider marinated tomato/cucumber/red onion/balsamic + extra virgin olive oil (gf)"),
      new Buff("Caesar salad", "Caesar salad/romaine/roasted cherry tomato/shaved Parmesan (gf)"),
      new Buff("Spring mix/shaved carrot/sliced mushroom/scallion/house made Ranch (gf)", "Spring mix/shaved carrot/sliced mushroom/scallion/house made Ranch (gf)"),
    ]
    const LovelandSides = [
      new Buff("Garlic/herb roasted red bliss potato (gf)","Garlic/herb roasted red bliss potato (gf)"),
      new Buff("Parmesan/buttermilk whipped potato (gf)","Parmesan/buttermilk whipped potato (gf)"),
      new Buff("Louisiana dirty rice","Louisiana dirty rice/English peas/creole seasoning (gf)"),
      new Buff("Crispy green beans","Crispy green beans/fire roasted tomato/toasted almond (gf)"),
      new Buff("Baked beans","Baked beans/pepper bacon/caramelized onion (gf)"),
      new Buff("Classic Potato Salad - celery hearts","Classic Potato Salad - celery hearts/garlic (gf)"),
      new Buff("Pesto Pasta Salad - olives","Pesto Pasta Salad - olives / mozzarella / tomato / herbs / lemon"),
      new Buff("Mini vegetable kebobs","Mini vegetable kebobs/zucchini/summer squash/mushroom/onion/garlic marinade (gf)"),
      new Buff("Steamed sweet corn (gf)","Steamed sweet corn (gf)"),
      new Buff("Classic Macaroni + Cheese","Classic Macaroni + Cheese/potato crisp topping")
    ]
    const LovelandEntrees = [
      new Buff("Pulled pork","Pulled pork/assorted BBQ sauces $6"),
      new Buff("Smoked pork spare ribs","Smoked pork spare ribs $7.50 (gf)"),
      new Buff("Jamaican jerk chicken kebabs & Beef Kebabs","Jamaican jerk chicken kebabs & Beef Kebabs/onion & garlic marinade $10.50 (gf)"),
      new Buff("Bratwurst/milk stout marinade","Bratwurst/milk stout marinade $6.75"),
      new Buff("Pulled pork sliders + Beef sliders","Pulled pork sliders + Beef sliders/appropriate condiments $6.75"),
      new Buff("Cider brined Bacon wrapped Pork Tenderloin","Cider brined Bacon wrapped Pork Tenderloin/mustard BBQ sauce/horseradish cream $7 (gf)"),
      new Buff("Mediterranean chicken breast","Mediterranean chicken breast/garlic/lemon $6 (gf)"),
      new Buff("Flank steak/smoked jalapeno & adobo marinade (gf) or Flank steak/vinegar, onion & garlic marinade","Flank steak/smoked jalapeno & adobo marinade (gf) or Flank steak/vinegar, onion & garlic marinade $8.50 (gf)"),
      new Buff("Chili/garlic/coconut/citrus marinated chicken legs & thighs (gf)","Chili/garlic/coconut/citrus marinated chicken legs & thighs (gf)")
    ]
    const BackcountrySalad = [
      new Buff("Organic arugula/spinach/soft boiled egg","Organic arugula/spinach/soft boiled egg/ avocado/ tomato/ goat cheese/horseradish honey mustard vinaigrette/baked Parmesan crisp (gf)"),
      new Buff("Wedge salad","Wedge salad/tomato/red onion marmalade/pepper bacon/cucumber/red pepper coulis/Gorgonzola dressing (gf)"),
      new Buff("Baby Kale + Arugula/fresh peaches","Baby Kale + Arugula/fresh peaches, pears or strawberries/candied walnuts/Boulder Mountain goat cheese/red onion marmalade (gf)"),
      new Buff("Heritage mix/strawberries/Boulder Mountain goat cheese","Heritage mix/strawberries/Boulder Mountain goat cheese/candied walnuts/balsamic (gf)"),
      new Buff("Organic spring mix/arugula/balsamic roasted portabella","Organic spring mix/arugula/balsamic roasted portabella/aged white cheddar/toasted pecan/shaved rainbow carrot/tomato/Roasted garlic honey balsamic vinaigrette (gf)"),
      new Buff("Baby Kale + Arugula/roasted beets/gorgonzola","Baby Kale + Arugula/roasted beets/gorgonzola/rainbow carrots/dried cranberries/red wine oregano vinaigrette (gf)")
    ];
    const BackcountrySides = [
      new Buff("Assorted grilled veggies","Assorted grilled veggies/lemon/extra virgin olive oil (gf)"),
      new Buff("Red curry rainbow carrots","Red curry rainbow carrots/ginger English pea butter (gf)"),
      new Buff("Crispy Brussels sprouts","Crispy Brussels sprouts/pepper bacon/caramelized shallot (gf)"),
      new Buff("Lemon + Goat Cheese Potato Gratin","Lemon + Goat Cheese Potato Gratin/sweet onion/basil (gf)"),
      new Buff("Roasted Hatch Chili + Asadero Cheese Potato Gratin","Roasted Hatch Chili + Asadero Cheese Potato Gratin/sweet onion/cilantro (spicy!) (gf)"),
      new Buff("Eggplant + Tomato gratin","Eggplant + Tomato gratin/Italian herbs/bread crumbs/Parmesan (gf)"),
      new Buff("Twice Baked Potato","Twice Baked Potato/pepper bacon/Asadero cheese/scallion/sour cream (gf)"),
      new Buff("Fresh Crudité Platter","Fresh Crudité Platter/fresh veggies (gf)"),
      new Buff("Cheesy cauliflower gratin (gf)","Cheesy cauliflower gratin (gf)"),
      new Buff("Roasted broccoli/parmesan/roasted garlic emulsion (gf)","Roasted broccoli/parmesan/roasted garlic emulsion (gf)"),
      new Buff("Vegetable kebabs","Vegetable kebabs/lemon/garlic/oregano marinade (gf)"),
      new Buff("Southern style dirty brown rice","Southern style dirty brown rice/Creole spices/bruinoise veggies/herbs/roasted tomato (gf)")
    ];
    const BackcountryEntreesPoultry = [
      new Buff("Stuffed French Chicken Breast","Stuffed French Chicken Breast/spinach/brie $8"),
      new Buff("Mediterranean chicken breast","Mediterranean chicken breast/garlic/onion/lemon/extra virgin olive oil/roasted cherry tomato $6 (gf)"),
      new Buff("Fresh Tracks Buttermilk Fried Chicken","Fresh Tracks Buttermilk Fried Chicken (fried on site, minimum orders apply) $7"),
      new Buff("Classic Chicken Parmesan","Classic Chicken Parmesan/sweet basil tomato sauce/mozzarella/house made bread crumbs $6.75"),
      new Buff("Lightly Breaded Chicken Picatta","Lightly Breaded Chicken Picatta/lemon caper white wine sauce/fried shallot $6.75"),
      new Buff("House chicken/whole chicken marinated in coconut milk","House chicken/whole chicken marinated in coconut milk/scallion/ginger/garlic/red chili/mix of dark and white meat $6.75"),
      new Buff("Pecan smoked chicken","Pecan smoked chicken/white meat & dark meat/Sweet n sticky BBQ sauce/mustard BBQ & Carolina BBQ $7"),
      new Buff("Portuguese Braised skin on bone in chicken & prosciutto","Portuguese Braised skin on bone in chicken & prosciutto/white & dark meat/dry sherry/paprika/tomato/roasted red pepper $9"),
    ];
    const BackcountryEntreesPork = [
      new Buff("one In Pork Chop","Bone In Pork Chop/rosemary allspice brine $14 (gf)"),
      new Buff("Cider Brined Pepper bacon wrapped Pork Tenderloin $8 (gf)","Cider Brined Pepper bacon wrapped Pork Tenderloin $8 (gf)"),
      new Buff("Pork Tenderloin/smoked jalapeno + garlic","Pork Tenderloin/smoked jalapeno + garlic – minimum order applies $8 (gf)"),
      new Buff("Braised Pork Shank/hatch chilies/adobo demi","Braised Pork Shank/hatch chilies/adobo demi $8 (gf)"),
      new Buff("Moroccan brined thick center cut pork loin","Moroccan brined thick center cut pork loin/pepper seared/pineapple mango chutney $9"),
      new Buff("Pork roulade/roasted red pepper","Pork roulade/roasted red pepper/organic baby spinach/mushroom duxelle/apricot bacon emulsion $9"),
    ]
    const BackcountryEntreesVegetarian = [
      new Buff("Eggplant Parmesan","Eggplant Parmesan/crispy eggplant/red sauce/cheese blend $6"),
      new Buff("Stuffed Bell peppers","Stuffed Bell peppers/brown rice/Parmesan/mushrooms/herbs/garlic $5.50 (gf)"),
      new Buff("Stuffed Portabella Mushroom","Stuffed Portabella Mushroom/roasted red pepper/feta/Italian herbs $5.50"),
      new Buff("Roasted Pablano baked chili rellano","Roasted Pablano baked chili rellano/chili roasted sweet potato/veggies/Mexican cheese/Chili red sauce $9 (Can be vegan) (gf)"),
      new Buff("Heirloom tomato cashew cream tart","Heirloom tomato cashew cream tart/balsamic roasted Oyster mushrooms/grilled asparagus $13 (vegan)"),
      new Buff("Carolina gold rice stuffed portabella","Carolina gold rice stuffed portabella/roasted beets/crispy potato strings/roasted red pepper ginger emulsion $13 (vegan) (gf)"),
    ];
    const BackcountryEntreesSeafood = [
      new Buff("Salmon/honey mustard glaze","Salmon/honey mustard glaze $9 (gf)"),
      new Buff("New England Baked Haddock","New England Baked Haddock/house made breadcrumbs/Chardonnay butter $7"),
      new Buff("Red Snapper","Red Snapper/lemon/extra virgin olive oil $11 (gf)"),
      new Buff("“Margarita Shrimp”","“Margarita Shrimp”/pepper smoked bacon/tomato/cilantro/avocado/tequila $10.25 (gf)"),
      new Buff("Creole Shrimp Kebabs","Creole Shrimp Kebabs/pineapple/peppers $10.25 (gf)"),
      new Buff("Mussels/tomato white wine reduction","Mussels/tomato white wine reduction $6.75 (gf)"),
      new Buff("Pepper seared Cod","Pepper seared Cod/creamy stone ground grits/Creole spiced tomato $9 (gf)"),
    ];
    const BackcountryEntreesBeef = [
      new Buff("Flat Iron Steak","Flat Iron Steak $12.75 (gf)"),
      new Buff("Flank Steak/smoked jalapeno marinade","Flank Steak/smoked jalapeno marinade $8.50 (gf)"),
      new Buff("Flank Steak/garlic + onion marinade","Flank Steak/garlic + onion marinade $8.50 (gf)"),
      new Buff("NY Strip Steak ","NY Strip Steak $11.75 (gf)"),
      new Buff("Short Ribs/red wine demi reduction","Short Ribs/red wine demi reduction $13.50 (gf)"),
      new Buff("Hanging Beef Tenderloin","Hanging Beef Tenderloin $11 (gf)"),
      new Buff("Prime rib","Prime rib $16"),
      new Buff("Short rib beef Bourguigon/red wine braise","Short rib beef Bourguigon/red wine braise $14.50"),
      new Buff("Cajun marinated beef tenderloin","Cajun marinated beef tenderloin/creole crawfish compound butter $15 (gf)"),
    ];
    return (
      <div>
        <h1 className="titles">Loveland Pass Buffet</h1>
        <h5 className="sample-titles">Salads (choose 1 salad + 2 breads) $6</h5>
        {this.renderBuffet(LovelandSalad)}
        {this.renderBuffet(breads)}

        <h5 className="sample-titles">Sides (choose 1 for $3, 2 for $6, 3 for $9)</h5>
        {this.renderBuffet(LovelandSides)}

        <h5 className="sample-titles">Entrees priced individually/prices vary if you choose two or three options</h5>
        {this.renderBuffet(LovelandEntrees)}

        <h1 className="titles">Backcountry Buffet</h1>
        <h5 className="sample-titles">Salads (choose 1 salad + 2 breads) $7</h5>
        {this.renderBuffet(BackcountrySalad)}
        {this.renderBuffet(breads)}

        <h5 className="sample-titles">Sides (choose 1 for $3.75, 2 for $7.25, 3 for $10)</h5>
        {this.renderBuffet(BackcountrySides)}

        <h5 className="sample-titles">ENTREES(Prices may vary if you choose two proteins)</h5>
        <h5 className="sample-titles">Poultry</h5>
        {this.renderBuffet(BackcountryEntreesPoultry)}

        <h5 className="sample-titles">PORK</h5>
        {this.renderBuffet(BackcountryEntreesPork)}

        <h5 className="sample-titles">VEGETARIAN</h5>
        {this.renderBuffet(BackcountryEntreesVegetarian)}

        <h5 className="sample-titles">FISH + SEAFOOD</h5>
        {this.renderBuffet(BackcountryEntreesSeafood)}

        <h5 className="sample-titles">BEEF</h5>
        <p className="warning">Sauces: horseradish cream * Au Poivre * chimichurri * Dijon blue cheese sherry (Available to try at tasting)</p>
        {this.renderBuffet(BackcountryEntreesBeef)}
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {buffet: state.food.buffet}
}

export default connect(mapStateToProps, {handleCheckboxChangeBuffet})(Buffet);
