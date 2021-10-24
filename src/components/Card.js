import React from 'react';
import styled from 'styled-components';

function Card(props) {
    const CardContainer = styled.div`
    box-sizing: border-box;
    border: 1px solid var(--gray);
    border-radius:5px;
    display: flex;
    flex-direction:column;
    padding: 1em;
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