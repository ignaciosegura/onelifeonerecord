require('../sass/_results.scss');

import React from 'react';

class Results extends React.Component {

  render() {
    if (this.props.results.length === 0) return null;

    let RenderedResults = this.props.results.map(function (item) {
      console.log(item.images.length);
      let resultImage = (item.images.length >= 2)
        ? item.images[1].url
        : '';

      return (
        <li data-spotify-id={item.id} data-spotify-uri={item.uri}>
          <img src={resultImage} alt={item.name} />
          <h3>{item.name}</h3>
        </li>
      );
    });

    return (
      <ul>
        {RenderedResults}
      </ul>
    )
  }

}

export default Results;
