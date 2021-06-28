import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/global.scss'
import { App } from './App';
import { Provider } from 'react-redux'
import store from './store/index'
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);