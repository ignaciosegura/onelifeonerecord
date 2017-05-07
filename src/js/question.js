'use strict';

require('../sass/_question.scss');

import React from 'react';

class Question extends React.Component {
  render() {
    return <div className="question">{this.props.question}</div>
  }
}

export default Question;
