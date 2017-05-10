'use strict';

require('../sass/_input.scss');

import React from 'react';
import Spotify from './spotify.js';
import DebounceInput from 'react-debounce-input';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.requestData = this.requestData.bind(this);
    this.processSearchResults = this.processSearchResults.bind(this);
    this.Spotify = new Spotify();
    this.state = {
      items: []
    }
  }
  requestData(e) {
    if (e.target.value.length < 3) return;
    let searchString = e.target.value;

    this.Spotify.search('artist', searchString, this.processSearchResults);
  }

  processSearchResults(err, result) {
    if (err !== null) return;

    let artists = result.body.artists.items;
    this.setState({ items: artists });
    console.log(artists);
  }

  render() {
    return <div id="search-box">
      <label htmlFor="search-field">{this.props.label}</label>
      <DebounceInput
        id="search-field"
        className={this.props.className}
        data-search-for={this.props.searchFor}
        minLength={3}
        debounceTimeout={600}
        onChange={this.requestData} />
    </div>
  }
}

export default Input;
