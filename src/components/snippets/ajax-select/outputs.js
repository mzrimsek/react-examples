import React, {Component} from 'react';

export default class Outputs extends Component{
  getImageUrls(){
    let fixedName = this.props.data.name.replace('-', '');
    let frontImage = 'http://www.pokestadium.com/sprites/xy/' + fixedName + '.gif';
    let backImage = 'http://www.pokestadium.com/sprites/xy/back/' + fixedName + '.gif'
    return [frontImage, backImage];
  }
  render(){
    var imgUrls = this.getImageUrls();
    return(
      <div className="outputs">
        <div className="level has-text-centered">
            <div className="level-item">
              <img src={imgUrls[0]} />
            </div>
            <div className="level-item">
              <img src={imgUrls[1]} />
            </div>
        </div>
        <div className="name">
          <span className="data-label">Name: </span>{this.props.data.name}
        </div>
        <div className="pokedex-number">
          <span className="data-label">Pokedex #: </span>{this.props.data.id}
        </div>
        <div className="description">
          <span className="data-label">Description: </span>{this.props.data.flavor_text_entries[1].flavor_text}
        </div>
      </div>
    );
  }
}
