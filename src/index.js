import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import store from './store/store.js';
import App from './containers/app';
import http from './utils/http.js';

import './theme/style.less';

http.init(store);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('app'),
);
