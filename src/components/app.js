import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

import Header from './layout/header';
import Footer from './layout/footer';
import Snippet from './layout/snippet'

import AjaxSelect from './snippets/ajax-select/ajaxSelect';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      githubUrl: 'https://github.com/mzrimsek/react-examples/'
    };
  }
  render() {
    return (
      <div className="app">
        <Header/>
        <Snippet name="ajax-select" description="Update options on one select based on the selected option of another." githubUrl={this.state.githubUrl}>
          <AjaxSelect />
        </Snippet>
        <RouteHandler></RouteHandler>
        <Footer githubUrl={this.state.githubUrl} />
      </div>
    );
  }
}
