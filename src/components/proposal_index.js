import React from 'react';
import dave from '../resources/dave.png';
import salad from '../resources/fresh_salad.png';
export default () => {
  return (
    <div className="container-vert">
      <img className="salad" src={salad} alt="fresh salad" />
        <h2 className="big-blurb">
          Thank you for your interest in Fresh weddings! A member of our team will
    call you soon to see if you have any questions, or if you’d like us to
    prepare a custom proposal for you.
        </h2>
      <div className="container-horiz">
        <img className="dave" src={dave} alt="Chef Dave" />
        <p>“You guys were AMAZING!! The whole day went so seamlessly

for us and all the staff was so helpful and professional the

entire day. The food was awesome (I had been looking forward

to it since our tasting) and you guys did not disappoint! All of

our friends had such nice things to say and it was all because

of your teams hard work that night. Please tell all the staff

how thankful we were to have you guys there for our big

day. ” – Laura, bride June 2015</p>
      </div>
    </div>
  )
}
