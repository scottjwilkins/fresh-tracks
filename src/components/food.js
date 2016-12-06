import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectService } from '../actions/index';
import { bindActionCreators } from 'redux';
import MenuSelector from '../actions/menu_selector';

class Food extends Component {

  componentWillMount(){
        window.scrollTo(0, 0)
  }
  render() {

    return(
      <MenuSelector selection={this.props.style} />
    )

  }
}
function mapStateToProps(state) {
  return {
    style: state.serviceStyle.style
  }
}
function mapDispatchToProps(dispatch) {
  //whenever select book is called, the result should be passed to our reducers
  return bindActionCreators({ selectService: selectService}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Food);
