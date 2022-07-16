import PropTypes from 'prop-types';
import {
  CommentOption,
  OptionList,
  OptionButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionList>
    {options.map(option => (
      <CommentOption key={option}>
        <OptionButton type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </OptionButton>
      </CommentOption>
    ))}
  </OptionList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
