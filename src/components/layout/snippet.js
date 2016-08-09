import React, {Component} from 'react';

export default class Snippet extends Component{
  render(){
    const sourceUrl = this.props.githubUrl + "/tree/master/src/components/snippets/" + this.props.name;
    return(
      <section className="section">
        <div className="container">
          <div className="heading">
            <h1 className="title is-2">{this.props.name}</h1>
            <h2 className="subtitle is-4">{this.props.description}</h2>
          </div>
          <div className="box">
            {this.props.children}
          </div>
          <a className="button is-primary is-pulled-right" href={sourceUrl} target="_blank">View Snippet Source</a>
        </div>
      </section>
    );
  }
}
