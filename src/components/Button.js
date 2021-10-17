import React from'react'
import styled from 'styled-components'

const PrimaryButton = styled.button`
    color: whitesmoke;
    background-color: ${props => props.theme.bgcolor};
    border: none;
    border-radius: 40px;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    padding: 10px 32px;
    cursor: pointer;
    transition: .2s ease-in-out;
    :hover{
        background-color: ${props => props.theme.hoverbgcolor};
        transition: .2s ease-in-out;
    }
`

PrimaryButton.defaultProps = {
    theme: {
      bgcolor: "var(--blue)",
      hoverbgcolor:"var(--dark-blue)"
    }
}


export default function Button (props){
    return(<>
            <PrimaryButton theme={props.theme}>
                {props.text}
            </PrimaryButton>
            
        </>
    )
}