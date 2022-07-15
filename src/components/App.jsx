import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import NotificationMessage from './NotificationMessage';
import Section from './Section';
import PropTypes from 'prop-types';

class App extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    bad: this.props.initialValue,
    neutral: this.props.initialValue,
  };

  onLeaveFeedback = value => {
    this.setState(prev => ({ [value]: prev[value] + 1 }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((item, acc) => item + acc, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <NotificationMessage />
          ) : (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
