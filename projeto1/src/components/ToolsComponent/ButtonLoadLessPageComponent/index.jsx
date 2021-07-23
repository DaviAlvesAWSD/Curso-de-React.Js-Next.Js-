import './styles.css';

//import { Component } from 'react';

// component funcional
export const ButtonLoadLessPageComponent = ({ text, disabled, onClick }) => (
  <button
    disabled={disabled}
    className='buttonLess'
    onClick={onClick}>
    {text}
  </button>
);

/* component class
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
*/