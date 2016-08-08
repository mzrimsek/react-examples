import React, {Component} from 'react';

class SelectOption extends Component{
  render(){
    return(
      <option className="select-option" value={this.props.value}>{this.props.display}</option>
    );
  }
}

export default class SelectWrapper extends Component{
  render(){
    let selectOptionNodes = this.props.data.map(function(data, index){
      return(
        <SelectOption key={index} display={data} value={index+1} />
      );
    })
    return(
      <div className="select-wrapper">
        <label>{this.props.label}:</label>
        <select onChange={this.props.onChange}>
          {selectOptionNodes}
        </select>
      </div>
    );
  }
}
