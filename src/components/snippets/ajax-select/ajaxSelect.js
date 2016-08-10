import React, {Component} from 'react';
import axios from 'axios';

import SelectWrapper from './selectWrapper';
import Outputs from './outputs';

export default class AjaxSelect extends Component{
  constructor(props){
    super(props);
    this.state = {
      secondarySelectData: [],
      loadingSecondarySelectData: false,
      selectedItemIndex: 0,
      selectedItemData: {},
      loadingSelectedItemData: false
    };

    this.getSecondarySelectData = this.getSecondarySelectData.bind(this);
    this.updateSelectedItemIndex = this.updateSelectedItemIndex.bind(this);
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
      this.setState({
        selectedItemIndex: 0,
        loadingSecondarySelectData: true
      });

      let dataUrl = 'http://pokeapi.co/api/v2/generation/' + generationNumber + '/';
      axios.get(dataUrl)
        .then(function(res){
          this.setState({
            secondarySelectData: res.data.pokemon_species,
            loadingSecondarySelectData: false
          });
        }.bind(this))
        .catch(function(err){
          console.error(err);
        }.bind(this));
    }
  }
  updateSelectedItemIndex(selectedItemIndex){
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
    let namesOnly = ['Select Pokemon'];
    this.state.secondarySelectData.forEach(function(pokemon){
      namesOnly.push(pokemon.name);
    })
    return namesOnly;
  }
  getButtonClass(){
    let extraClass = '';
    if(this.state.loadingSelectedItemData){
      extraClass = ' is-loading';
    }
    else if(this.state.loadingSecondarySelectData){
      extraClass = ' is-disabled';
    }
    return 'button is-primary is-fullwidth' + extraClass;
  }
  renderInputs(){
    let primarySelectData = this.getPrimarySelectData();
    let secondarySelectData = this.getSecondarySelectDataToDisplay();
    let buttonClass = this.getButtonClass();
    return(
      <div className="inputs">
        <div className="control primary-select">
          <SelectWrapper label="Pokemon Generation" data={primarySelectData} handleChange={this.getSecondarySelectData} />
        </div>
        <div className="control secondary-select">
          <SelectWrapper label="Pokemon" data={secondarySelectData} selected={this.state.selectedItemIndex}
            loading={this.state.loadingSecondarySelectData} handleChange={this.updateSelectedItemIndex} />
        </div>
        <div className="control">
          <button className={buttonClass} onClick={this.getSelectedItemData}>Go</button>
        </div>
      </div>
    );
  }
  shouldRenderOutputs(){
    let selectedItemData = this.state.selectedItemData;
    return !(Object.keys(selectedItemData).length === 0 && selectedItemData.constructor === Object);
  }
  render(){
    return(
      <div className="ajax-selects">
        <div className="columns">
          <div className="column is-half">
            {this.renderInputs()}
          </div>
          <div className="column is-half">
            { this.shouldRenderOutputs() && <Outputs data={this.state.selectedItemData} /> }
          </div>
        </div>
      </div>
    )
  }
}
