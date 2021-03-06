import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';

import getRoutes from './routes';
import {fromJS} from 'immutable';

const store = createStore(history, fromJS(window.__data));

const Router_ = <Router routes={getRoutes()} history={browserHistory} />;

export default class Client extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store} key="provider">
        {Router_}
      </Provider>
    );
  }
}
