import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { handleClientInfo } from '../actions/index';


class clientInfo extends Component {
  handleClick() {
    setTimeout(() => {
      if (this.props.clientInfo) {
        this.props.changeCourse("service")
      }
    }, 100)


  }
  render() {
    const { fields: { clientname, email, numberOfGuests, phone}, handleSubmit } = this.props;
    return (

      <div className="container-vert center">
            <h3 className="titles">About You</h3>
          <h2 className="big-blurb gutter">
            Ready to get started? We'll walk you through a few simple steps to create an idea for your event. The selections you make now aren't carved in stone and can be changed later on in the process. This information will help us create a package tailored to your specific needs. After you submit your choices, we will review them and contact you shortly with a personal proposal. First, we would like to know a little more about you!
          </h2>
          <form className="container-with-sidebar about-you" onSubmit={handleSubmit(this.props.handleClientInfo)}>
          <div className="client-info">
            <div className="client-info-div">
              <label>What is your name?</label>
              <input type="text" placeholder="Jane Dough" className="form-control"  value={this.props.clientInfo.clientname || ''} {...clientname}/>
              <div className='danger'>
                {clientname.touched ? clientname.error : ""}
              </div>
            </div>
            <div className="client-info-div">
              <label>Phone number</label>
              <input type="tel" placeholder="(000)000-0000" className="form-control" value={this.props.clientInfo.phone || ''} {...phone}/>
              <div className='danger'>
                {phone.touched ? phone.error : ""}
              </div>
            </div>
            <div className="client-info-div">
              <label>Email</label>
              <input type="email" placeholder="JaneDough@gmail.com" className="form-control" value={this.props.clientInfo.email || ''} {...email}/>
              <div className='danger'>
                {email.touched ? email.error : ""}
              </div>
            </div>
            <div className="client-info-div">
              <label>number of guests</label>
              <input type="number" className="form-control" placeholder="0" value={this.props.clientInfo.numberOfGuests || ''} {...numberOfGuests}/>
              <div className='danger'>
                {numberOfGuests.touched ? numberOfGuests.error : ""}
              </div>
            </div>
            <button type="submit" className="button-start" onClick={() => this.handleClick()}>submit</button>
          </div>
        </form>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    clientInfo: state.clientInfo.info
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
  fields: ['clientname', 'email', 'numberOfGuests', 'phone'],
  validate
}, mapStateToProps, { handleClientInfo })(clientInfo)
