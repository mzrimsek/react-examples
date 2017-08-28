import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

import Header from './layout/header';
import Footer from './layout/footer';
import Snippet from './layout/snippet'

import AjaxSelect from './snippets/ajax-select/ajaxSelect';
import RandomizedMultiselect from './snippets/randomized-multiselect/randomizedMultiselect';

const ajaxSelectDescription = "Update options on one select based on the selected option of another.";
const randomizedMultiselectDescription = "Generates a request from a multiselect by randomly choosing a selected option.";

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
        <Snippet name="ajax-select" description={ajaxSelectDescription} githubUrl={this.state.githubUrl}>
          <AjaxSelect />
        </Snippet>
        <Snippet name="randomized-multiselect" description={randomizedMultiselectDescription} githubUrl={this.state.githubUrl}>
          <RandomizedMultiselect />
        </Snippet>
        <RouteHandler></RouteHandler>
        <Footer githubUrl={this.state.githubUrl} />
      </div>
    );
  }
}
