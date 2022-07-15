import React from 'react';

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

export default Statistics;
