import React from 'react';
import Buffet from './menus/buffet.js';
import Appetizers from './menus/appetizers.js';
import Beverages from './menus/beverages.js';
import Glassware from './menus/glassware.js';
import Desserts from './menus/desserts.js';
import Munchies from './menus/munchies.js';
import checkedBox from '../resources/checked-box.png';
import van from '../resources/drop-off.png';
import gondola from '../resources/gondola.png';

export default () => {
  return (
    <div className="container-with-sidebar">
      <img src={gondola} className="gondola" alt="fresh tracks logo" />
      <img src={checkedBox} alt="checkbox" className="checkBox" />
      <h1 className="titles">Drop off menu</h1>
        <div className="gutter container-vert">
          <div className="container-vert"><img src={van} alt="buffet" className="img-buffet"/></div>
          <p className="center-text big-blurb">Feel free to peruse our entire menu and select the items you want dropped off. <i>Minunum $500.</i></p>
          <div className="container-vert-left">
            <Appetizers />
            <i>Buffet only pricing starts at $19 per guest. Labor, rentals, taxes & fees are additional.</i>
            <Buffet />
            <Beverages />
            <p className="center-text big-blurb warning">More items for your consideration:</p>
            <Glassware />
            <Desserts />
            <Munchies />
          </div>
        </div>
    </div>
  )
}
