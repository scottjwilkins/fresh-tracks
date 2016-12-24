import React from 'react';
import contact from '../resources/contact.png'

export default () => {
  return (
    <div className="container gutter">
    <div className="address container">
      <br></br>
      <img src={contact} alt="operator standing by" className="dave"/>
      <h3 className="questions center-text">Here at Fresh Tracks, we pride ourselves in delivering the best possible experience to our guests. If you have any questions, please contact us and we'll make you our priority.</h3>
      <p>1036 El Rancho Road</p>
      <p>Evergreen, CO 80439</p>
    </div>
    <p>Phone: 303-526-0511</p>
    <p> Email: <a href="mailto:freshtracksfoods@gmail.com">freshtracksfoods@gmail.com</a> </p>
    <p>Web: <a target="_blank" href="http://www.freshtracksfoodsandcatering.com">freshtracksfoodsandcatering.com</a></p>

    </div>
  )
}
