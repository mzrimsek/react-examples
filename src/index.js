import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router, {Route, DefaultRoute} from 'react-router';

import App from 'components/app';

const routes = (
  <Route handler={App} path="/">
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  ReactDOM.render(<Handler/>, document.getElementById('root'));
});
