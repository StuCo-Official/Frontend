import React from "react";
import styled from "@emotion/styled";

type Props = React.DetailedHTMLProps<
              React.ButtonHTMLAttributes<HTMLButtonElement>, 
              HTMLButtonElement> & {};

const BaseButton = (props: Props) => {
  return (
    <StyledButton {...props}/>
  );
}

export default BaseButton;

const StyledButton = styled.button`
  background-color: #4A9B74;
  color: white;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: #5DBB8B;
  }

  &:active {
    transform: scale(0.99);
  }
`;
