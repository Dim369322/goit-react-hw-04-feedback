import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <div>
    <Title>{title}</Title>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
