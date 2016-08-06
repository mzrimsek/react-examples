import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
import Snippet from 'components/layout/snippet'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Snippet name="Ajax Selects" description="Update options on one select based on the selected option of another.">

        </Snippet>
        <Snippet name="Loading Indicator" description="Load data in children as needed and show loading indicator as necessary.">

        </Snippet>
        <RouteHandler></RouteHandler>
        <Footer />
      </div>
    );
  }
}
