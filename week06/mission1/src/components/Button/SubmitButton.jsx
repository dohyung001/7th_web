import React from 'react';
import styled from 'styled-components';

const StyledSubmitButton = styled.button`
  width: 100%;
  height: 50px;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  background-color: ${({ isvalidate }) => (isvalidate ? 'rgb(253,4,91)' : 'gray')};
  color: white;
  font-size:20px;
`;

const SubmitButton = ({ label, isvalidate }) => (
  <StyledSubmitButton type="submit" isvalidate={isvalidate} disabled={!isvalidate}>
    {label}
  </StyledSubmitButton>
);

export default SubmitButton;
