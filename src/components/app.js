import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>Stuff!</div>
        <RouteHandler></RouteHandler>
      </div>

    );
  }
}
