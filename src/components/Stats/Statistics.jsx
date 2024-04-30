import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ options, clicks, total, positivePercentage }) => {
  return (
    <div className={css.stats}>
      <ul className={css.list}>
        {options.map(option => (
          <li className={css.listItem} key={option}>
            {option}: {clicks[option]}
          </li>
        ))}
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  clicks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
