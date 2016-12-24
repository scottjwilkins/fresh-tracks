import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import cupcake from '../resources/cupcake.png';
import { handleClientInfo } from '../actions/index'

class clientInfo extends Component {
  render() {
    const { fields: { clientname, email, numberOfGuests, phone, additionalInfo }, handleSubmit } = this.props;
    return (
      <form className="container-with-sidebar" onSubmit={handleSubmit(this.props.handleClientInfo)}>
        <img src={cupcake} alt="cupcake" className="dave" />
        <h3>Additional Information</h3>
        <div className="client-info-div">
          <label>What is your name?</label>
          <input type="text" placeholder="Jane Dough" className="" value={clientname.value || ''} {...clientname}/>
          <div>
            {clientname.touched ? clientname.error : ""}
          </div>
        </div>
        <div className="client-info-div">
          <label>Phone number</label>
          <input type="tel" placeholder="(000)000-0000" className="" value={phone.value || ''} {...phone}/>
            <div>
              {phone.touched ? phone.error : ""}
            </div>
        </div>
        <div className="client-info-div">
          <label>Email</label>
          <input type="email" placeholder="JaneDough@gmail.com"className="" value={email.value || ''} {...email}/>
            <div>
              {email.touched ? email.error : ""}
            </div>
        </div>
        <div className="client-info-div">
          <label>number of guests</label>
          <input type="number" className="" placeholder="0" value={numberOfGuests.value || ''} {...numberOfGuests}/>
            <div>
              {numberOfGuests.touched ? numberOfGuests.error : ""}
            </div>
        </div>
        <div className="client-info-div">
          <textarea className="text-area" placeholder="Any thoughts, comments, questions, concerns?" value={additionalInfo.value || ''} {...additionalInfo}/>
          <label>additional info</label>
        </div>
        <button type="submit" className="button-start">send</button>
      </form>
    )
  }
}
function validate(values){
  const errors = {};
  if(!values.clientname) {
    errors.clientname = 'Please enter your name'
  }
  if(!values.phone) {
    errors.phone = 'Please enter a number where we can reach you'
  }
  if(!values.email) {
    errors.email = 'Please enter a valid email'
  }
  if(!values.numberOfGuests) {
    errors.numberOfGuests = 'Please enter the number of guests you expect at your event'
  }
  return errors;
}
export default reduxForm({
  form: 'clientInfo',
  fields: ['clientname', 'email', 'numberOfGuests', 'phone', 'additionalInfo'],
  validate
}, null, { handleClientInfo })(clientInfo)
