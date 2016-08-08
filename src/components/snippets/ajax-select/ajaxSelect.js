import React, {Component} from 'react';
import axios from 'axios';

import SelectWrapper from './selectWrapper';

export default class AjaxSelect extends Component{
  constructor(props){
    super(props);
    this.state = {
      primarySelectData: this.getPrimarySelectData(),
      secondarySelectData: [],
      selectedItem: {}
    };
    this.getSecondarySelectData = this.getSecondarySelectData.bind(this);
    this.updateSelectedItem = this.updateSelectedItem.bind(this);
  }
  getPrimarySelectData(){
    let primarySelectDisplayBase = 'Generation ';
    let primarySelectData = ['Select Generation'];
    for(let i = 1; i <= 6; i++){
      primarySelectData.push(primarySelectDisplayBase + i);
    }
    return primarySelectData;
  }
  getSecondarySelectData(generationNumber){
    console.log(generationNumber);
    let dataUrl = 'http://pokeapi.co/api/v2/generation/' + generationNumber + '/';
    axios.get(dataUrl)
      .then(function(res){
        this.setState({
          secondarySelectData: res.data.pokemon_species
        });
      }.bind(this))
      .catch(function(err){
        console.error(err);
      }.bind(this));
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
