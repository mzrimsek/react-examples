import React, {Component} from 'react';

export default class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <div className="container is-pulled-right">
          <a className="icon" href={this.props.githubUrl} target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a className="icon" href="http://zrimsek.com" target="_blank">
            <i className="fa fa-external-link"></i>
          </a>
        </div>
      </footer>
    );
  }
}
