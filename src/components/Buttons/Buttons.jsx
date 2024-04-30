import css from './Buttons.module.css';
import PropTypes from 'prop-types';

export const Button = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonBox}>
      {options.map(option => (
        <button
          type="button"
          className={css.buttons}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

Button.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.func,
};
