import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Button } from './Buttons/Buttons';
import { Statistics } from './Stats/Statistics';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) return 0;
    return Math.round((good / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedback();
    return (
      <div>
        <Section title="Please leave a review">
          <Button
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></Button>
        </Section>

        <Section title="Statistics"></Section>
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            options={options}
            clicks={this.state}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}

export default App;
