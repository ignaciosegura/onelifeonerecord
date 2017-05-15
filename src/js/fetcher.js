// This class makes all AJAX requests
import Superagent from 'superagent-cache';

class Fetcher extends Superagent {

  constructor() {
    super();
    this.places = {
      spotify: 'https://api.spotify.com/v1/',
      drupal: './d8/'
    }
  }
}

export default Fetcher;
