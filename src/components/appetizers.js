import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectAppetizer } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class Appetizers extends Component {
  render() {
    return ()
  }
  function mapStateToProps(state) {
    return {
      appetizers: state.appetizers
    }
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectAppetizer: selectAppetizer }, dispatch)
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Appetizers);
