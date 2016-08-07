import React, {Component} from 'react';

class PrimarySelectOption extends Component{
  render(){
    return(
      <option className="primary-select-option" value={this.props.value}>{this.props.display}</option>
    );
  }
}

export default class PrimarySelect extends Component{
  render(){
    let primarySelectOptionNodes = this.props.data.map(function(data, index){
      return(
        <PrimarySelectOption key={index} display={data} value={index+1} />
      );
    })
    return(
      <div className="primary-select">
        <label>{this.props.label}:</label>
        <select onChange={this.props.getDataFunction}>
          {primarySelectOptionNodes}
        </select>
      </div>
    );
  }
}
