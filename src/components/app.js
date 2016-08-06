import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

import Header from 'components/layout/header';
import Footer from 'components/layout/footer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Header />
          <section className="section">
            <div className="container">
              <div className="heading">
                <h1 className="title is-2">AJAX Selects</h1>
                <h2 className="subtitle is-4">
                  Update information options on one select based on the selected option of another.
                </h2>
              </div>
              <div className="columns">
                <div className="column is-half">
                  <h1 className="title is-3">Code</h1>
                  <div className="box">
                    <code>
                      export default class Example extends Component{

                      }
                    </code>
                  </div>
                </div>
                <div className="column is-half">
                  <h1 className="title is-3">Results</h1>
                  <div>
                    <div>component elements</div>
                    <div>ajax output</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <RouteHandler></RouteHandler>
        <Footer />
      </div>
    );
  }
}
