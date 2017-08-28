import React, {Component} from 'react';

export default class DogButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dogButton">
        <button onClick={this.props.handleClick}>Another One!</button>
      </div>
    );
  }
}