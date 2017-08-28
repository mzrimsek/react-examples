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
  render(){
    let selectOptionNodes = this.props.data.map(function(data, index){
      return(
        <option className="select-option" key={index} value={index}>{data}</option>
      );
    });
    let selectClass = (this.props.loading) ? 'is-disabled' : '';
    return(
      <div className="select-wrapper">
        <label className="label">{this.props.label}:</label>
        <p className="control">
          <span className="select is-fullwidth">
            <select className={selectClass} value={this.props.selected} onChange={this.handleChange}>
              {selectOptionNodes}
            </select>
          </span>
        </p>
      </div>
    );
  }
}
