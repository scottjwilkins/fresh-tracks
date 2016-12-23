import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class clientInfo extends Component {
  render() {
    return (
      <form>
        <h3>Additional Information</h3>
        <div>
          <label>What is your name?</label>
          <input type="text" className="" />
        </div>
        <div>
          <label>Phone number</label>
          <input type="text" className="" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" className="" />
        </div>
        <div>
          <label>number of guests</label>
          <input type="text" className="" />
        </div>
        <div>
          <label>additional info</label>
          <input type="text" className="" />
        </div>
        <button type="submit">send</button>
      </form>
    )
  }
}
export default reduxForm({
  form: 'clientInfoForm',
  fields: ['name', 'email', 'numberOfGuests', 'phone', 'additionalInfo']
})(clientInfo)
