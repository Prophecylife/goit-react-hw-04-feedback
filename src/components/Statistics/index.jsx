import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total:{total}</p>
    <p>
      Positive feedback: {isNaN(positivePercentage) ? 0 : positivePercentage}%
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
