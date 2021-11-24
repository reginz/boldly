import React from 'react';
import styled from 'styled-components';

function Card(props) {
    const CardContainer = styled.div`
    box-sizing: border-box;
    border: none;
    box-shadow: 2px 5px 11px #c7c7c7 ;
    border-radius:5px;
    display: flex;
    flex-direction:column;
    padding: 1em;
    max-width: 300px;
    `
    return (
    <>
        <CardContainer>
            <h1> {props.icon} </h1>
            <h3>{props.h3}</h3>
            <p> {props.p} </p>
        </CardContainer >
        </>
    );
}

export default Card;