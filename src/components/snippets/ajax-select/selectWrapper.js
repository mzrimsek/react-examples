import React, {Component} from 'react';

export default class SelectWrapper extends Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    let value = e.target.value;
    this.props.onChange(value);
  }
  render(){
    let selectOptionNodes = this.props.data.map(function(data, index){
      return(
        <option className="select-option" key={index} value={index}>{data}</option>
      );
    });
    return(
      <div className="select-wrapper">
        <label className="label">{this.props.label}:</label>
          <p className="control">
            <span className="select">
              <select onChange={this.onChange}>
                {selectOptionNodes}
              </select>
            </span>
          </p>
      </div>
    );
  }
}
