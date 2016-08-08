import React, {Component} from 'react';
import axios from 'axios';

import SelectWrapper from './selectWrapper';

export default class AjaxSelect extends Component{
  constructor(props){
    super(props);
    this.state = {
      primarySelectData: this.getPrimarySelectData(),
      secondarySelectData: [],
      selectedItemIndex: 0,
      selectedItemData: {},
      loadingSelectedItemData: false
    };

    this.getSecondarySelectData = this.getSecondarySelectData.bind(this);
    this.updateSelectedItem = this.updateSelectedItem.bind(this);
    this.getSelectedItemData = this.getSelectedItemData.bind(this);
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
    if(generationNumber !== 0){
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
  }
  updateSelectedItem(selectedItemIndex){
    this.setState({ selectedItemIndex: selectedItemIndex });
  }
  getSelectedItemData(){
    if(this.state.selectedItemIndex !== 0){
      this.setState({ loadingSelectedItemData: true });
      let selectedItem = this.state.secondarySelectData[this.state.selectedItemIndex-1];
      axios.get(selectedItem.url)
        .then(function(res){
          this.setState({
            selectedItemData: res.data,
            loadingSelectedItemData: false
          });
        }.bind(this))
        .catch(function(err){
          console.error(err);
        }.bind(this));
    }
  }
  getSecondarySelectDataToDisplay(){
    let data = this.state.secondarySelectData;
    let namesOnly = ['Select Pokemon'];
    for(var i = 0; i < data.length; i++){
      namesOnly.push(data[i].name);
    }
    return namesOnly;
  }
  getButtonClass(){
    return 'button is-primary' + (this.state.loadingSelectedItemData ? ' is-loading' : '');
  }
  shouldRenderOutputs(){
    let selectedItemData = this.state.selectedItemData;
    return !(Object.keys(selectedItemData).length === 0 && selectedItemData.constructor === Object);
  }
  renderInputs(){
    let secondarySelectData = this.getSecondarySelectDataToDisplay();
    let buttonClass = this.getButtonClass();
    return(
      <div className="inputs">
        <div className="control">
          <SelectWrapper label="Pokemon Generation" data={this.state.primarySelectData} onChange={this.getSecondarySelectData} />
        </div>
        <div className="control">
          <SelectWrapper label="Pokemon" data={secondarySelectData} onChange={this.updateSelectedItem} />
        </div>
        <div className="control">
          <button className={buttonClass} onClick={this.getSelectedItemData}>Go</button>
        </div>
      </div>
    );
  }
  renderOutputs(){
    return (
      <div className="outputs">
        <div>
          <span>Name:</span>{this.state.selectedItemData.name}
        </div>
        {this.state.selectedItemData.evolves_from_species &&
          <div>
            <span>Evolves From:</span>{this.state.selectedItemData.evolves_from_species.name}
          </div>
        }
        <div>
          <span>Number:</span>{this.state.selectedItemData.id}
        </div>
      </div>
    )
  }
  render(){
    return(
      <div className="ajax-selects">
        <div className="columns">
          <div className="column is-half">
            {this.renderInputs()}
          </div>
          <div className="column is-half">
            {this.shouldRenderOutputs() && this.renderOutputs()}
          </div>
        </div>
      </div>
    )
  }
}
