import PropTypes from 'prop-types';
import { StatisticsElement, StatisticsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsList>
    <StatisticsElement>Good: {good}</StatisticsElement>
    <StatisticsElement>Neutral: {neutral}</StatisticsElement>
    <StatisticsElement>Bad: {bad}</StatisticsElement>
    <StatisticsElement>Total: {total}</StatisticsElement>
    <StatisticsElement>
      Positive feedback: {positivePercentage}%
    </StatisticsElement>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
