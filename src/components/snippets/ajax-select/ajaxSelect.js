import React, {Component} from 'react';
import axios from 'axios';

import SelectWrapper from './selectWrapper';

export default class AjaxSelect extends Component{
  constructor(){
    super();
    this.state = {
      primarySelectData: this.getPrimarySelectData(),
      secondarySelectData: [],
      selectedItem: {}
    };
  }
  getPrimarySelectData(){
    let primarySelectDisplayBase = 'Generation ';
    let primarySelectData = [];
    for(let i = 1; i <= 6; i++){
      primarySelectData.push(primarySelectDisplayBase + i);
    }
    return primarySelectData;
  }
  getSecondarySelectData(event){
    let value = event.target.value;
    const secondaryDataBaseUrl = 'http://pokeapi.co/api/v2/generation/';
    axios.get(secondaryDataBaseUrl + value)
      .then(({data}) => this.setState({secondarySelectData: data}))
      .catch((err) => console.error(err));
  }
  updateSelectedItem(event){
    let value = event.target.value;
    this.setState({
      selectedItem: value
    });
  }
  render(){
    return(
      <div className="ajax-selects">
        <SelectWrapper label="Pokemon Generation" data={this.state.primarySelectData} onChange={this.getSecondarySelectData} />
        <SelectWrapper label="Pokemon" data={this.state.secondarySelectData} onChange={this.updateSelectedItem} />
      </div>
    )
  }
}
