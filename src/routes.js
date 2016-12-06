import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ProposalIndex from './components/proposal_index'
import ProposalSubmit from './components/proposal_submit'
import Faq from './components/faq'
import Sample from './components/sample'
import Contact from './components/contact'
import Food from './components/food'
import App from './App';
import './App.css';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={ProposalIndex} />
    <Route path="/submit" component={ProposalSubmit} />
    <Route path="/faq" component={Faq} />
    <Route path="/sample" component={Sample} />
    <Route path="/contact" component={Contact} />
    <Route path="/food" component={Food} />
  </Route>
)
