import React, {Component} from 'react';

export default class SelectWrapper extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    let value = e.target.value;
    this.props.handleChange(value);
  }
  getSelectClass() {
    let selectClass = (this.props.loading) ? 'is-loading' : '';
    return "select is-fullwidth " + selectClass;
  }
  render(){
    let selectOptionNodes = this.props.data.map(function(data, index){
      return(
        <option className="select-option" key={index} value={index}>{data}</option>
      );
    });
    let selectClass = this.getSelectClass();
    return(
      <div className="select-wrapper">
        <label className="label">{this.props.label}:</label>
        <div className="control">
          <div className={selectClass}>
            <select value={this.props.selected} onChange={this.handleChange}>
              {selectOptionNodes}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
