import React, {Component} from 'react';
import axios from 'axios';

import DogImage from './dogImage';
import DogSelect from './dogSelect';

export default class RandomizedMultiselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      selectedBreeds: [],
      imageUrl: ""
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
    axios.get(url)
    .then(function(res) {
      this.setState({
        imageUrl: res.data.message
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
  render() {
    if(this.state.breeds.length === 0) {
      this.getDogBreeds();
    }
    return (
      <div className="randomized-multiselect">
        <div className="columns">
          <div className="column is-half">
            <DogSelect data={this.state.breeds} handleChange={this.updateSelectedBreeds}/>
            <a className="button is-primary is-fullwidth" onClick={this.getImageForSelectedBreed}>Another One!</a>
          </div>
          <div className="column is-half">
            <DogImage data={this.state.imageUrl}/>
          </div>
        </div>
      </div>
    );
  }
}