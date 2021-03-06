import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { App } from './app';
import { store } from './store';
import registerServiceWorker from './registerServiceWorker';
import './styling/semantic.less'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
