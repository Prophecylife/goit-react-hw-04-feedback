import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import NotificationMessage from './NotificationMessage';
import Section from './Section';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const options = ['good', 'bad', 'neutral'];

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = good + bad + neutral;

  const positivePercentage = Math.floor((good / totalFeedback) * 100);

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback === 0 ? (
          <NotificationMessage message={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
