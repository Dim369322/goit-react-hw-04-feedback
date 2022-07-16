import styled from 'styled-components';

export const CommentOption = styled.li`
  display: inline-block;
  margin-right: 10px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const OptionList = styled.ul`
  padding-left: 10px;
  margin-top: 20px;
`;

export const OptionButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  font-weight: 600;
  height: 22px;

  &::first-letter {
    text-transform: capitalize;
  }
`;
