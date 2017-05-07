require('../sass/index.scss'); // Required by Webpack to read SASS folder and generate a CSS file

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Step from './step.js';

class Index extends React.Component {

  render() {
    return <Step step="step1" />
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
