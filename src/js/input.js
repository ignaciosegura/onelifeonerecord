'use strict';

require('../sass/_input.scss');

import React from 'react';
import Fetcher from './fetcher.js';

class Input extends React.Component {
  requestData(e) {
    if (e.target.value.length < 3) return;
    let Fetch = new Fetcher();
    let searchString = e.target.value;

    let query = {
      type: 'artist',
      q: searchString.toLowerCase()
    };
    Fetch
      .get(Fetch.places.spotify + 'search')
      .query(query)
      .set('Accept', 'application/json')
      .end(function (err, response) {
        console.log('response');
      })
  }

  render() {
    return <div id="search-box">
      <label htmlFor="search-field">{this.props.label}</label>
      <input type="text" id="search-field" className={this.props.className} data-search-for={this.props.searchFor} onChange={this.requestData} />
    </div>
  }
}

export default Input;
