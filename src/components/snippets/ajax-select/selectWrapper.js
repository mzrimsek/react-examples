import React, {Component} from 'react';

class SelectOption extends Component{
  render(){
    return(
      <option className="select-option" value={this.props.value}>{this.props.display}</option>
    );
  }
}

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
        <SelectOption key={index} display={data} value={index} />
      );
    })
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
