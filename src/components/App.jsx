import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Button } from './Buttons/Buttons';
import { Statistics } from './Stats/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState({ ...INITIAL_STATE });

  const onLeaveFeedback = feedback => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedback]: prevFeedback[feedback] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = Math.round((good / totalFeedback) * 100);
  return (
    <div>
      <Section title="Please leave a review">
        <Button
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        ></Button>
      </Section>
      <Section title="Statistics"></Section>
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          options={Object.keys(feedback)}
          clicks={feedback}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
};

export default App;
