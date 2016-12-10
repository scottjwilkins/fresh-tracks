
import React from 'react';
import Loveland from './loveland_pass';
import Backcountry from './backcountry';

export default () => {
    return (
      <div>
        <h1 className="titles">Loveland Pass Buffet</h1>
        <Loveland />
        <h1 className="titles">Backcountry Buffet</h1>
        <Backcountry />
      </div>
    )
}
