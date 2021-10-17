import React from "react";
import styled from "styled-components";
import Input from './Input'
import Button from './Button'
import Rocket from '../images/rocket.png'
const Container = styled.div`
    width: ${props => props.theme.width};
    text-align: center;
    display: flex;
    flex-direction: ${props => props.theme.flexDirection};
    gap: ${props => props.theme.gap};
    align-items: center;
    justify-content: center;
`
const Banner = styled.h1`
    font-size: 85px;
    margin-bottom: .2em;
`;

const SubBanner = styled.p`
    font-size: 20px;
    margin-bottom: 2em;
`
Container.defaultProps = {
    theme:{
        width:"70%",
        flexDirection: "column",
        gap: "0"
    }
}
const smallContainer={
    width: "45%"
}
const inlineContainer = {
    flexDirection:"row",
    width: "100%",
    gap: "1em"
}

export default function Landing (props){
    return(
        <>
            <Container >
                {/* Todo: Add a colored span */}
                
                    <Banner>{props.text}</Banner>

                <Container theme={smallContainer}>
                    <SubBanner>{props.subText}</SubBanner>
                </Container>
                <Container theme={inlineContainer}>
                <Input placeholder="Enter your email" />
                <Button text="Request Access"/>
                </Container>
                
                <img 
                src={Rocket} 
                style={{
                    transform: "rotate(65deg)"
                }}
                ></img>
            </Container>
        </>
    )
}