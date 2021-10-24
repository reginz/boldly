import React from'react'
import styled from 'styled-components'

const PrimaryButton = styled.a`
    color: ${props => props.theme.textcolor};
    background-color: ${props => props.theme.bgcolor};
    border: none;
    border-radius: 5px;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    padding: 10px 32px;
    cursor: pointer;
    transition: .2s ease-in-out;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: .5em;
    :hover{
        background-color: ${props => props.theme.hoverbgcolor};
        transition: .2s ease-in-out;
    }
`

PrimaryButton.defaultProps = {
    theme: {
      bgcolor: "var(--blue)",
      hoverbgcolor:"var(--dark-blue)",
      textcolor:"whitesmoke"
    }
}

export default function Button (props){
    return(<>
            <PrimaryButton theme={props.theme} href={props.href}>
                {props.icon}
                {props.text}
            </PrimaryButton>
            
        </>
    )
}