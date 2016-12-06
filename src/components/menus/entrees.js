import React from 'react';

export default () => {
  return (
    <div>
      <form>
        <h1 className="titles">ENTREES(Prices may vary if you choose two proteins)</h1>
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
