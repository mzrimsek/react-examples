import React, {Component} from 'react';

export default class DogSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let options = e.target.options;
    let value = [];
    for(let i = 0; i < options.length; i++) {
      if(options[i].selected) {
        value.push(options[i].label);
      }
    }
    this.props.handleChange(value);
  }
  render() {
    let dogOptions = this.props.data.map((data, index) => {
      return (
        <option key={index} value={data}>{data}</option>
      );
    });
    return (
      <div className="dogSelect">
        <label className="label">Breed:</label>
        <div className="control">
          <div className="select is-multiple is-fullwidth">
            <select onChange={this.handleChange} multiple size="6">
              {dogOptions}
            </select>
          </div>
        </div>
      </div>
    );
  }
}