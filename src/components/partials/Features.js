import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

function Features(props) {
    const CardWrapper = styled.div`
        display: inline-flex;
    `
    return (
        <div>
            <CardWrapper>
                <Card h3="hey"
                p="peorc"
                icon="🧠"></Card>
                <Card h3="hey"
                p="peorc"
                icon="🧠"></Card>
            </CardWrapper>
        </div>
    );
}

export default Features;