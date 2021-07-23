import './styles.css';

import { Component } from 'react';

export class ButtonLoadLessPageComponent extends Component {
  render() {
    const { text, disabled, onClick } = this.props;
    return (
      <button
        disabled={disabled}
        className='buttonLess'
        onClick={onClick}>
        {text}
      </button>
    );
  }


}