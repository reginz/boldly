import React from 'react';
import styled from 'styled-components';
import Button from './Button'
import av1 from '../images/userAvatar01.svg'
function HeroSection(props) {
    const Container =styled.div`
    margin: 2.5em 5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    `
    const ImgContainer =styled.div`
    width: 36%;
    `
    const LinkButton = {
        bgcolor:"transparent",
        hoverbgcolor:"transparent",
        textcolor:"var(--pale-blue)"
    }
    const LittleImgContainer =styled.div`
    margin-left: -20px;
    `
    return (
        <div>
            <Container>
                <div style={{
                    width:"50%"
                }}>
                    <h1>
                    {props.bannerText}
                    </h1>
                    <p>
                        {props.paragraph}
                    </p>
                    <div style={{
                        display: 'inline-flex',
                        alignItems:"center"
                    }}>
                    <Button text="Sign in with Twitter" icon={ 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                            } 
                            href="#"
                            />
                    <Button text="Learn More " 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>}
                        theme={LinkButton}
                    ></Button>
                    </div>
                    <ul style={{
                        display: 'flex',
                        padding: "1em 0"
                    }}>
                        <div><img src={av1}></img></div>
                        <LittleImgContainer ><img src={av1}></img></LittleImgContainer>
                        <LittleImgContainer><img src={av1}></img></LittleImgContainer>
                        <LittleImgContainer><img src={av1}></img></LittleImgContainer>
                        <LittleImgContainer><img src={av1}></img></LittleImgContainer>
                        <LittleImgContainer><img src={av1}></img></LittleImgContainer>
                        <LittleImgContainer><img src={av1}></img></LittleImgContainer>
                        <LittleImgContainer><img src={av1}></img></LittleImgContainer>
                        <LittleImgContainer><img src={av1}></img></LittleImgContainer>
                    </ul>
                    <p>
                        Join <span style={{color:"var(--pale-blue)",
                    fontWeight:"bold"}}>195</span> others who used this landing template to land their product!
                    </p>
                </div>
                <ImgContainer>
                    <img style={{
                        width: "100%"
                    }} src={props.image}/>
                </ImgContainer>
                
            </Container>
        </div>
    );
}

export default HeroSection;