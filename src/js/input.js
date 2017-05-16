require('../sass/_input.scss');

import React from 'react';
import DebounceInput from 'react-debounce-input';

class Input extends React.Component {
  render() {
    return (
      <DebounceInput minLength={3} debounceTimeout={600} onChange={this.props.changeEvent} />
    )
  }
}

export default Input;
