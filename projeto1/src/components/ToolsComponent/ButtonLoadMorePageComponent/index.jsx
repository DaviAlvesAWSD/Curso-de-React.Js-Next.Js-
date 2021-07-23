import './styles.css';

import { Component } from 'react';

export class ButtonLoadMorePageComponent extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button
        disabled={disabled}
        className='buttonMore'
        onClick={onClick}>
        {text}
      </button>

    );

  }
}