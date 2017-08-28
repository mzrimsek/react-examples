import React, {Component} from 'react';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.trackClick = this.trackClick.bind(this);
  }
  trackClick(category){
    ga('send', 'event', category, 'click', 'Footer');
  }
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
              react-examples by <a href="http://zrimsek.com" target="_blank" onClick={this.trackClick('View zrimsek.com')}>Mike Zrimsek</a>
            </p>
            <p>
              <a href={this.props.githubUrl} target="_blank" onClick={this.trackClick('View Site Source')}>View Source <i className="fa fa-github"></i></a>
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
