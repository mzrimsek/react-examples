import React, {Component} from 'react';

export default class DogImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dogImage">
        <img src={this.props.data}/>
      </div>
    );
  }
}