require('../sass/_input.scss');

import React from 'react';
import Spotify from './spotify.js';
import DebounceInput from 'react-debounce-input';
import Results from './results';

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
    this.Spotify.search('artist', e.target.value, this.processSearchResults);
  }

  processSearchResults(err, result) {
    if (err !== null) return;

    let artists = result.body.artists.items;
    this.setState({ items: artists });
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
      <Results results={this.state.items} />
    </div>
  }
}

export default Input;
