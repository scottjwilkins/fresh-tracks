import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home'
import ServiceStyle from './components/service_style'
import Faq from './components/faq'
import Sample from './components/sample'
import Contact from './components/contact'
import Menu from './components/menu'
import InfoSent from './components/info_sent'
import App from './App';
import './App.css';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/sent" component={InfoSent} />
    <Route path="/menu" component={Menu} />
  </Route>
)
