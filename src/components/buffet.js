import React from 'react';
import BuffetPic from '../resources/buffet.png';
import Buffet from './menus/buffet.js';
import Appetizers from './menus/appetizers.js';
import Beverages from './menus/beverages.js';
import Glassware from './menus/glassware.js';
import Desserts from './menus/desserts.js';
import Munchies from './menus/munchies.js';
import checkedBox from '../resources/checked-box.png';
import Sidebar from './sidebar';
import gondola from '../resources/gondola.png';


export default () => {
  return (
    <div className="container-with-sidebar">
      <h1 className="titles">Buffet menu</h1>
      <div className="gutter container-vert">
        <p className="center-text big-blurb">We've created two different buffet menus to choose from. Want something else? You'll find our entire menu Underneath. Just click on any items you want and we'll make it happen!</p>
        <div className="container-vert-left">
          <i>Buffet only pricing starts at $19 per guest. Labor, rentals, taxes & fees are additional.</i>
          <Buffet />
        </div>
      </div>
    </div>
  )
}
