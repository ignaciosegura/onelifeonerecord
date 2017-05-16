require('../sass/_searchbox.scss');

import React from 'react';
import Spotify from './spotify.js';
import Results from './results';
import Input from './input';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.requestData = this.requestData.bind(this);
    this.processSearchResults = this.processSearchResults.bind(this);
    this.Spotify = new Spotify();
    this.state = {
      items: []
    }
  }
  requestData(e) {
    this.Spotify.search(this.props.searchFor, e.target.value, this.processSearchResults);
  }

  processSearchResults(err, result) {
    if (err !== null) return;

    this.setState({ items: result.body.artists.items });
  }

  render() {
    return <div id="search-box">
      <label htmlFor="search-field">{this.props.label}</label>
      <Input
        id="search-field"
        className={this.props.className}
        changeEvent={this.requestData} />
      <Results results={this.state.items} type={this.props.searchFor} />
    </div>
  }
}

export default SearchBox;
