import React, {Component} from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="hero is-fullheight is-primary is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">react-examples</h1>
            <h2 className="subtitle is-3">A Collection of React Snippets</h2>
          </div>
        </div>
      </div>
    );
  }
}
