import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'blue' | 'gray' | 'white';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = styled.button<ButtonProps>`
  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat;
  min-width: 220px;
  width: max-content;
  border-radius: 24px;
  border: 1px solid #ffffff;
  cursor: pointer;
  padding: 8px 12px;
  background-color: ${(props) =>
    props.variant === 'gray' ? '#5D5B69' : props.variant === 'white' ? '#ffffff' : '#00c2ff'};
  color: ${(props) =>
    props.variant === 'gray' ? '#00c2ff' : '#ffffff'};
  border: none;
  &:hover {
    background-image: linear-gradient(
      93.11deg,
      #00c2ff 15.03%,
      #ff75f4 83.95%
    );
  }
  &:active {
    background-image: linear-gradient(
      93.11deg,
      #00c2ff 15.03%,
      #ff75f4 83.95%
    );
    transform: scale(0.98);
`;

export default Button;