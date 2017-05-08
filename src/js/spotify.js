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
    this.delay = 1000;
    this.request;
  }

  search(target, query, callback) {
    let parameters = {
      type: 'artist',
      q: query.toLowerCase()
    };
    if (this.request) {
      this.request.abort();
    }
    setTimeout(() => {
      this.request = this.Superagent
        .get(this.config.url + 'search')
        .query(parameters)
        .type('json')
        .end(function (err, response) {
          callback(err, response);
        })
    }, this.delay);
  }
}

export default Spotify;
