require('../sass/index.scss'); // Required by Webpack to read SASS folder and generate a CSS file

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {

  render() {
    return <h1>Hello, banana!</h1>
  }

}


ReactDOM.render(
  <Index></Index>,
  document.getElementById('root')
);

