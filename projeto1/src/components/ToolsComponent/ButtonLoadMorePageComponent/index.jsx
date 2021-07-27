import P from 'prop-types';
import './styles.css';

// import { Component } from 'react';

// component funcional
export const ButtonLoadMorePageComponent = ({ text, disabled, onClick }) => (
  <button disabled={disabled} className="buttonMore" onClick={onClick}>
    {text}
  </button>
);
ButtonLoadMorePageComponent.defaultProps = {
  disabled: false,
  onclick: '',
};

ButtonLoadMorePageComponent.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};

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
