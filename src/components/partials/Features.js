import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

function Features(props) {
    const CardWrapper = styled.div`
        display: inline-flex;
        gap: 4em;
`

const Header2 = styled.h2`
    text-align: center;
`
    return (
        <div>
            <Header2> Take your startup to a whole new level </Header2>
            <CardWrapper>
                <Card h3="This is the 1st "
                p="This is an amazing card to show your great feature!"
                icon="🧠"></Card>

                <Card h3="Another one"
                p="This is another amazing card to show your great feature!"
                icon="🧠"></Card>
            </CardWrapper>
        </div>
    );
}

export default Features;