import React, {Component} from 'react';

export default class Footer extends Component{
  getBuiltWith(){
    return [
      { name: "Bulma", link: "http://bulma.io/" },
      { name: "pokeapi", link: "http://pokeapi.co/" },
      { name: "Pokestadium", link: "http://www.pokestadium.com/" }
    ];
  }
  render(){
    let technologies = this.getBuiltWith();
    let builtWithNodes = technologies.map(function(technology, index){
      return(
        <a className="built-with" href={technology.link} target="_blank" key={index}>{technology.name}</a>
      );
    });
    return(
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              react-examples by <a href={this.props.githubUrl} target="_blank">Mike Zrimsek</a>
            </p>
            <p>
              <a href={this.props.githubUrl} target="_blank">View Source <i className="fa fa-github"></i></a>
            </p>
            <p>
              Built With: {builtWithNodes}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
