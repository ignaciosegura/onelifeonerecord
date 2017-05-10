'use strict';

// This class makes all AJAX requests
import Superagent from 'superagent-cache';

class Spotify {
  constructor() {
    this.Superagent = new Superagent();
    this.config = {
      url: 'https://api.spotify.com/v1/',
      key: './d8/'
    };
    this.search = this.search.bind(this);
  }

  search(target, query, callback) {
    let parameters = {
      type: 'artist',
      q: query.toLowerCase()
    };
    this.request = this.Superagent
      .get(this.config.url + 'search')
      .query(parameters)
      .type('json')
      .timeout(5000, 10000)
      .end(function (err, response) {
        callback(err, response);
      });
  }
}

export default Spotify;
