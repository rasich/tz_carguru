import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import ErrorBoundry from './components/error-boundry';

import Service from './services/service';
import ServiceContext from './services/service-context';


import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';

import './index.css';

import store from './redux/store';
const service = new Service(); 


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceContext.Provider value={service}>
        <Router>
          <App/>
        </Router>
      </ServiceContext.Provider>
    </ErrorBoundry>
  </Provider>
,document.getElementById('root'));
