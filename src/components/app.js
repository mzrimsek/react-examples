import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

export default class App extends Component {
  renderHeader(){
    return(
      <div className="hero is-fullheight is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">react-examples</h1>
            <h2 className="subtitle is-3">A Collection of React Snippets</h2>
          </div>
        </div>
      </div>
    );
  }
  renderFooter(){
    return(
      <footer className="footer">
        <div className="container is-pulled-right">
          <a className="icon" href="github.com/mzrimsek/react-examples/" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a className="icon" href="zrimsek.com/" target="_blank">
            <i className="fa fa-external-link"></i>
          </a>
        </div>
      </footer>
    );
  }
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          {this.renderHeader()}
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
                  <div className="box">
                    <h1 className="title is-3">Code</h1>
                    <pre>
                      <code>
                        export default class Example extends Component{

                        }
                      </code>
                    </pre>
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
        {this.renderFooter()}
      </div>
    );
  }
}
