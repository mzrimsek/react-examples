import React, {Component} from 'react';
import {RouteHandler} from 'react-router';
import Header from 'components/header';
import Footer from 'components/footer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <RouteHandler></RouteHandler>
        <Footer></Footer>
      </div>

    );
  }
}
