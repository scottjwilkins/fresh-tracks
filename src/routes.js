import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ProposalIndex from './components/proposal_index'
import ProposalSubmit from './components/proposal_submit'
import App from './App';
import './App.css';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={ProposalIndex} />
    <Route path="/submit" component={ProposalSubmit} />
  </Route>
)
