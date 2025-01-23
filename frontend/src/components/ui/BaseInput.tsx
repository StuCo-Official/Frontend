import styled from "@emotion/styled";
import React from "react";

type Props = React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>, 
            HTMLInputElement> & {};

const BaseInput = (props : Props) => {
    return (
        <StyledInput {...props}/>
    );
}

export default BaseInput;

const StyledInput = styled.input`
    background-color: white; 
    color: black;
    padding: 0.75rem 1rem;
    border: 2px solid #4a9b74;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    width: 100%;

    &:focus {
    border-color: #5dbb8b;
    outline: none;
    }

    &:hover {
    background-color: #f0f4f4;
    }

    &::placeholder {
    color: #aaa; 
    }
`;