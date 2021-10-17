import React from "react";
import styled from 'styled-components'


const PrimaryInput = styled.input`
    color: ${props => props.theme.color};
    padding: 10px 32px;
    line-height: 1.5;
    border-radius: 40px;
    border: 1px solid var(--gray);
    width: 40%;
    ::placeholder{
        ${props => props.placeholder}
    }
`

PrimaryInput.defaultProps ={
    theme:{
        color:"black"
    }
}
export default function Input(props){
    return(
        <PrimaryInput 
        placeholder={props.placeholder}
        theme={props.theme} />
    )
}