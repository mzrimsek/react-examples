import React, {Component} from 'react';
import axios from 'axios';

import PrimarySelect from './primarySelect';

export default class AjaxSelect extends Component{
  constructor(){
    super();
    this.state = {
      primarySelectData: this.getPrimarySelectData(),
      secondarySelectData: {}
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
  render(){
    return(
      <div className="ajax-selects">
        <PrimarySelect label="Pokemon Generation" data={this.state.primarySelectData} getDataFunction={this.getSecondarySelectData} />
        <label>Pokemon</label>
        <select></select>
      </div>
    )
  }
}
