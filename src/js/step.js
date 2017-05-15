require('../sass/_step.scss');

import React from 'react';
import Question from './question.js';
import Button from './button.js';
import Input from './input.js';

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.step1 = [
      <Question question="Banana?" key="step1-question" />,
      <Button text="I don't know" key="step1-button" />,
      <Input className="artist" searchFor="artist" label="Easy, it was a record by" key="step1-input" />
    ];
  }

  render() {
    let currentStep = this.step1.map(function (element) {
      return element;
    }
    );
    return <div className="step">{currentStep}</div>
  }
}

export default Step;
