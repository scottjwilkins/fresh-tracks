import React from 'react';

export default () => {
  return (
    <div>
      <form>
        <h1 className="titles">Loveland Pass Buffet</h1>
        <h5 className="sample-titles">Salads (choose 1 salad + 2 breads) $6</h5>
        <p><input type="checkbox" value="mixed greens" />Mixed greens/cider marinated tomato/cucumber/red onion/balsamic + extra virgin olive oil (gf)</p>
        <p><input type="checkbox" value="caesar" />Caesar salad/romaine/roasted cherry tomato/shaved Parmesan (gf)</p>
        <p><input type="checkbox" value="spring mix" />Spring mix/shaved carrot/sliced mushroom/scallion/house made Ranch (gf)</p>
        <p><input type="checkbox" value="sourdough" />Lavender sourdough </p>
        <p><input type="checkbox" value="wheat" />honey whole wheat</p>
        <p><input type="checkbox" value="cornbread" />jalapeno cornbread</p>
        <p><input type="checkbox" value="focaccia" />rosemary parmesan focaccia</p>
        <p><input type="checkbox" value="dinner rolls" />Southern style dinner rolls</p>

        <h5 className="sample-titles">Sides (choose 1 for $3, 2 for $6, 3 for $9)</h5>
        <p><input type="checkbox" value="roasted potatoes" />Garlic/herb roasted red bliss potato (gf)</p>
        <p><input type="checkbox" value="whipped potatoes" />Parmesan/buttermilk whipped potato (gf)</p>
        <p><input type="checkbox" value="dirty rice" />Louisiana dirty rice/English peas/creole seasoning (gf)</p>
        <p><input type="checkbox" value="crispy green beans" />Crispy green beans/fire roasted tomato/toasted almond (gf)</p>
        <p><input type="checkbox" value="baked beans" />Baked beans/pepper bacon/caramelized onion (gf)</p>
        <p><input type="checkbox" value="potato salad" />Classic Potato Salad - celery hearts/garlic (gf)</p>
        <p><input type="checkbox" value="pesto pasta salad" />Pesto Pasta Salad - olives / mozzarella / tomato / herbs / lemon</p>
        <p><input type="checkbox" value="vegetable kabobs" />Mini vegetable kebobs/zucchini/summer squash/mushroom/onion/garlic marinade (gf)</p>
        <p><input type="checkbox" value="sweet corn" />Steamed sweet corn (gf)</p>
        <p><input type="checkbox" value="vegetable kabobs" />Classic Macaroni + Cheese/potato crisp topping</p>

        <h5 className="sample-titles">Entrees priced individually/prices vary if you choose two or three options</h5>
        <p><input type="checkbox" value="pulled pork" />Pulled pork/assorted BBQ sauces $6</p>
        <p><input type="checkbox" value="pork spare ribs" />Smoked pork spare ribs $7.50 (gf)</p>
        <p><input type="checkbox" value="jerk chicken kebabs" />Jamaican jerk chicken kebabs & Beef Kebabs/onion & garlic marinade $10.50 (gf)</p>
        <p><input type="checkbox" value="bratwurst" />Bratwurst/milk stout marinade $6.75</p>
        <p><input type="checkbox" value="pulled pork sliders" />Pulled pork sliders + Beef sliders/appropriate condiments $6.75</p>
        <p><input type="checkbox" value="bacon wrapped pork tenderloin" />Cider brined Bacon wrapped Pork Tenderloin/mustard BBQ sauce/horseradish cream $7 (gf)</p>
        <p><input type="checkbox" value="mediterranean chicken breast" />Mediterranean chicken breast/garlic/lemon $6 (gf)</p>
        <p><input type="checkbox" value="flank steak" />Flank steak/smoked jalapeno & adobo marinade (gf) or Flank steak/vinegar, onion & garlic marinade $8.50 (gf)</p>
        <p><input type="checkbox" value="marinated chicken legs" />Chili/garlic/coconut/citrus marinated chicken legs & thighs (gf)</p>

        <h1 className="titles">Backcountry Buffet</h1>
        <h5 className="sample-titles">Salads (choose 1 salad + 2 breads) $7</h5>
        <p><input type="checkbox" value="organic arugula-spinach" />Organic arugula/spinach/soft boiled egg/ avocado/ tomato/ goat cheese/horseradish honey mustard vinaigrette/baked Parmesan crisp (gf)</p>
        <p><input type="checkbox" value="wedge salad" />Wedge salad/tomato/red onion marmalade/pepper bacon/cucumber/red pepper coulis/Gorgonzola dressing (gf)</p>
        <p><input type="checkbox" value="baby kale salad-peaches" />Baby Kale + Arugula/fresh peaches, pears or strawberries/candied walnuts/Boulder Mountain goat cheese/red onion marmalade (gf)</p>
        <p><input type="checkbox" value="heritage mix salad" />Heritage mix/strawberries/Boulder Mountain goat cheese/candied walnuts/balsamic (gf)</p>
        <input type="checkbox" value="organic spring mix salad" /><p>Organic spring mix/arugula/balsamic roasted portabella/aged white cheddar/toasted pecan/shaved rainbow carrot/tomato/Roasted garlic honey balsamic vinaigrette (gf)</p>
        <p><input type="checkbox" value="baby kale salad-beets" />Baby Kale + Arugula/roasted beets/gorgonzola/rainbow carrots/dried cranberries/red wine oregano vinaigrette (gf)</p>
        <p><input type="checkbox" value="sourdough" />Lavender sourdough </p>
        <p><input type="checkbox" value="wheat" />honey whole wheat</p>
        <p><input type="checkbox" value="cornbread" />jalapeno cornbread</p>
        <p><input type="checkbox" value="focaccia" />rosemary parmesan focaccia</p>
        <p><input type="checkbox" value="dinner rolls" />Southern style dinner rolls</p>

        <h5 className="sample-titles">Sides (choose 1 for $3.75, 2 for $7.25, 3 for $10)</h5>
        <p><input type="checkbox" value="assorted grilled veggies" />Assorted grilled veggies/lemon/extra virgin olive oil (gf)</p>
        <p><input type="checkbox" value="rainbow carrots" />Red curry rainbow carrots/ginger English pea butter (gf)</p>
        <p><input type="checkbox" value="brussel sprouts" />Crispy Brussels sprouts/pepper bacon/caramelized shallot (gf)</p>
        <p><input type="checkbox" value="goat cheese potato gratin" />Lemon + Goat Cheese Potato Gratin/sweet onion/basil (gf)</p>
        <p><input type="checkbox" value="hatch chili" />Roasted Hatch Chili + Asadero Cheese Potato Gratin/sweet onion/cilantro (spicy!) (gf)</p>
        <p><input type="checkbox" value="eggplant and tomato gratin" />Eggplant + Tomato gratin/Italian herbs/bread crumbs/Parmesan (gf)</p>
        <p><input type="checkbox" value="twice baked potato" />Twice Baked Potato/pepper bacon/Asadero cheese/scallion/sour cream (gf)</p>
        <p><input type="checkbox" value="fresh crudite" />Fresh Crudité Platter/fresh veggies (gf)</p>
        <p><input type="checkbox" value="cheesy cauliflower" />Cheesy cauliflower gratin (gf)</p>
        <p><input type="checkbox" value="roasted broccoli" />Roasted broccoli/parmesan/roasted garlic emulsion (gf)</p>
        <p><input type="checkbox" value="vegetable kebabs" />Vegetable kebabs/lemon/garlic/oregano marinade (gf)</p>
        <p><input type="checkbox" value="dirty rice" />Southern style dirty brown rice/Creole spices/bruinoise veggies/herbs/roasted tomato (gf)</p>

        <h5 className="sample-titles">ENTREES(Prices may vary if you choose two proteins)</h5>
        <h5 className="sample-titles">Poultry</h5>
        <p><input type="checkbox" value="stuffed chicken breast" />Stuffed French Chicken Breast/spinach/brie $8</p>
        <p><input type="checkbox" value="Mediterranean chicken breast" />Mediterranean chicken breast/garlic/onion/lemon/extra virgin olive oil/roasted cherry tomato $6 (gf)</p>
        <p><input type="checkbox" value="fried chicken" />Fresh Tracks Buttermilk Fried Chicken (fried on site, minimum orders apply) $7</p>
        <p><input type="checkbox" value="chicken parmesan" />Classic Chicken Parmesan/sweet basil tomato sauce/mozzarella/house made bread crumbs $6.75</p>
        <p><input type="checkbox" value="chicken picatta" />Lightly Breaded Chicken Picatta/lemon caper white wine sauce/fried shallot $6.75</p>
        <p><input type="checkbox" value="house chicken" />House chicken/whole chicken marinated in coconut milk/scallion/ginger/garlic/red chili/mix of dark and white meat $6.75</p>
        <p><input type="checkbox" value="pecan smoked chicken" />Pecan smoked chicken/white meat & dark meat/Sweet n sticky BBQ sauce/mustard BBQ & Carolina BBQ $7</p>
        <p><input type="checkbox" value="Portuguese chicken" />Portuguese Braised skin on bone in chicken & prosciutto/white & dark meat/dry sherry/paprika/tomato/roasted red pepper $9</p>

        <h5 className="sample-titles">PORK</h5>
        <p><input type="checkbox" value="pork chop" />Bone In Pork Chop/rosemary allspice brine $14 (gf)</p>
        <p><input type="checkbox" value="bacon wrapped pork tenderloin" />Cider Brined Pepper bacon wrapped Pork Tenderloin $8 (gf)</p>
        <p><input type="checkbox" value="smoked jalapeno pork tenderloin" />Pork Tenderloin/smoked jalapeno + garlic – minimum order applies $8 (gf)</p>
        <p><input type="checkbox" value="braised pork shank" />Braised Pork Shank/hatch chilies/adobo demi $8 (gf)</p>
        <p><input type="checkbox" value="Moroccan pork loin" />Moroccan brined thick center cut pork loin/pepper seared/pineapple mango chutney $9</p>
        <p><input type="checkbox" value="pork roulade" />Pork roulade/roasted red pepper/organic baby spinach/mushroom duxelle/apricot bacon emulsion $9</p>

        <h5 className="sample-titles">VEGETARIAN</h5>
        <p><input type="checkbox" value="eggplant parmesan" />Eggplant Parmesan/crispy eggplant/red sauce/cheese blend $6</p>
        <p><input type="checkbox" value="stuffed bell peppers" />Stuffed Bell peppers/brown rice/Parmesan/mushrooms/herbs/garlic $5.50 (gf)</p>
        <p><input type="checkbox" value="stuffed portabella mushroom" />Stuffed Portabella Mushroom/roasted red pepper/feta/Italian herbs $5.50</p>
        <p><input type="checkbox" value="roasted poblano" />Roasted Pablano baked chili rellano/chili roasted sweet potato/veggies/Mexican cheese/Chili red sauce $9 (Can be vegan) (gf)</p>
        <p><input type="checkbox" value="heirloom tomato cashew cream tart" />Heirloom tomato cashew cream tart/balsamic roasted Oyster mushrooms/grilled asparagus $13 (vegan)</p>
        <p><input type="checkbox" value="rice stuffed portabella" />Carolina gold rice stuffed portabella/roasted beets/crispy potato strings/roasted red pepper ginger emulsion $13 (vegan) (gf)</p>

        <h5 className="sample-titles">FISH + SEAFOOD</h5>
        <p><input type="checkbox" value="salmon" />Salmon/honey mustard glaze $9 (gf)</p>
        <p><input type="checkbox" value="haddock" />New England Baked Haddock/house made breadcrumbs/Chardonnay butter $7</p>
        <p><input type="checkbox" value="red snapper" />Red Snapper/lemon/extra virgin olive oil $11 (gf)</p>
        <p><input type="checkbox" value="margarita shrimp" />“Margarita Shrimp”/pepper smoked bacon/tomato/cilantro/avocado/tequila $10.25 (gf)</p>
        <p><input type="checkbox" value="creole shrimp" />Creole Shrimp Kebabs/pineapple/peppers $10.25 (gf)</p>
        <p><input type="checkbox" value="mussels" />Mussels/tomato white wine reduction $6.75 (gf)</p>
        <p><input type="checkbox" value="cod" />Pepper seared Cod/creamy stone ground grits/Creole spiced tomato $9 (gf)</p>

        <h5 className="sample-titles">BEEF</h5>
        <p><input type="checkbox" value="flat iron steak" />Flat Iron Steak $12.75 (gf)</p>
        <p><input type="checkbox" value="jalapeno flank steak" />Flank Steak/smoked jalapeno marinade $8.50 (gf)</p>
        <p><input type="checkbox" value="garlic flank steak" />Flank Steak/garlic + onion marinade $8.50 (gf)</p>
        <p><input type="checkbox" value="NY strip steak" />NY Strip Steak $11.75 (gf)</p>
        <p><input type="checkbox" value="short ribs" />Short Ribs/red wine demi reduction $13.50 (gf)</p>
        <p><input type="checkbox" value="hanging beef tenderloin" />Hanging Beef Tenderloin $11 (gf)</p>
        <p><input type="checkbox" value="prime rib" />Prime rib $16</p>
        <p><input type="checkbox" value="short rib beef Bourguigon" />Short rib beef Bourguigon/red wine braise $14.50</p>
        <p><input type="checkbox" value="Cajun beef tenderloin" />Cajun marinated beef tenderloin/creole crawfish compound butter $15 (gf)</p>
        <p><input type="checkbox" value="prime rib" />Prime rib $16</p>
        <p className="warning">add sauce choices</p>



      </form>
    </div>
  )
}
