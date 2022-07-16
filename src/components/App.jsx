import { useState } from 'react';
import { Statistics } from '../components/Statistics/Statistics';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Section } from '../components/Section/Section';
import { Notification } from '../components/Notification/Notification';
import { Feedback } from './app.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(state => state + 1);
      case 'neutral':
        return setNeutral(state => state + 1);
      case 'bad':
        return setBad(state => state + 1);

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = (good / totalFeedback) * 100;

    return isNaN(positiveFeedback) ? 0 : Math.round(positiveFeedback);
  };

  const totalFeedbacks = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const feedbackType = { bad, good, neutral };

  return (
    <Feedback>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackType)}
          onLeaveFeedback={countFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Feedback>
  );
}
