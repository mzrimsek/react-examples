import React, {Component} from 'react';
import axios from 'axios';

import MultiSelect from './multiSelect';

export default class RandomizedMultiselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      selectedBreeds: [],
      imageUrl: "",
      loadingSelectedItemData: false
    };
    this.getDogBreeds = this.getDogBreeds.bind(this);
    this.getImageForBreed = this.getImageForBreed.bind(this);
    this.getImageForSelectedBreed = this.getImageForSelectedBreed.bind(this);
    this.updateSelectedBreeds = this.updateSelectedBreeds.bind(this);
  }
  getDogBreeds() {
    let url = "https://dog.ceo/api/breeds/list";
    axios.get(url)
    .then(function(res) {
      this.setState({
        breeds: res.data.message
      });
    }.bind(this))
    .catch(function(err) {
      console.error(err);
    }.bind(this));
  }
  getImageForBreed(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    this.setState({ loadingSelectedItemData: true });

    axios.get(url)
    .then(function(res) {
      this.setState({
        imageUrl: res.data.message,
        loadingSelectedItemData: false
      });
    }.bind(this))
    .catch(function(err) {
      console.error(err);
    }.bind(this));
  }
  getFromSelectedBreeds() {
    let breeds = this.state.selectedBreeds;
    let index = Math.floor(Math.random() * breeds.length);
    return breeds[index];
  }
  getImageForSelectedBreed() {
    let breed = this.getFromSelectedBreeds();
    this.getImageForBreed(breed);
  }
  updateSelectedBreeds(breeds) {
    this.setState({
      selectedBreeds: breeds
    });
    this.getImageForBreed(breeds[breeds.length-1]);
  }
  getButtonClass(){
    let extraClass = (this.state.loadingSelectedItemData) ? 'is-loading' : '';
    return 'button is-primary is-fullwidth ' + extraClass;
  }
  getButtonDisabled(){
    return this.state.selectedBreeds.length === 0;
  }
  render() {
    if(this.state.breeds.length === 0) {
      this.getDogBreeds();
    }
    let buttonClass = this.getButtonClass();
    let isButtonDisabled = this.getButtonDisabled();
    return (
      <div className="randomized-multiselect">
        <div className="columns">
          <div className="column is-half">
            <MultiSelect data={this.state.breeds} handleChange={this.updateSelectedBreeds}/>
            <a className={buttonClass} onClick={this.getImageForSelectedBreed} disabled={isButtonDisabled}>Go</a>
          </div>
          <div className="column is-half">
            <div className="output">
              <img src={this.state.imageUrl}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}