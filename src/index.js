/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
/* eslint-disable
  global-require,
  no-shadow,
  import/no-unresolved,
  import/extensions,
  import/first */
// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import root app

/* eslint-enable import/no-webpack-loader-syntax */

import IssueListPage from './containers/App';
import configureStore from './store';
import rootSaga from './sagas/rootSaga';

// Import routes
// import createRoutes from './routes';

// Create redux store without history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
/* eslint-enable no-underscore-dangle */
const store = configureStore();
store.runSaga(rootSaga);


  ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IssueListPage} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );



