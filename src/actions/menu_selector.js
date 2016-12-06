import Plated from '../components/plated';
import Buffet from '../components/buffet';
import Stations from '../components/stations';
import DropOff from '../components/drop_off';
import React from 'react';

export default (props) => {
    switch(props.selection){
      case "buffet":
       return <Buffet />
      case "plated":
      case "family-style":
        return <Plated />;
      case "stations":
        return <Stations />;
      case "drop-off":
        return <DropOff />;
      default:
        return (
          <div>Error</div>
        )
    }
}
