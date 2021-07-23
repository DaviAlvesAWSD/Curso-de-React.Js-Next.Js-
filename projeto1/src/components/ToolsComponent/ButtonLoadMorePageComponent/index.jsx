import './styles.css';

// import { Component } from 'react';

// component funcional
export const ButtonLoadMorePageComponent = ({ text, disabled, onClick }) => (
  <button
    disabled={disabled}
    className='buttonMore'
    onClick={onClick}>
    {text}
  </button>

);

/* component class
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
*/