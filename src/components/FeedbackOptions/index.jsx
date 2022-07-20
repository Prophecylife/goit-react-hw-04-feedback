import React from 'react';
import PropTypes from 'prop-types';
import Button from './index.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option, index) => (
      <Button key={index} type="button" onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
