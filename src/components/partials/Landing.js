import React from "react";
import styled from "styled-components";
import Input from '../Input'
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import HeroImg from "../../images/heroimg.png"

function Landing(props) {


    return (
        <div style={{
            backgroundColor:"#faf8f2",
            width: "100%",
            height: "max-content"
        }}>
            <Navbar />
            <HeroSection bannerText="Twitter analytics taken to a whole new level. "
            image={HeroImg}
            paragraph="Boldly is an open-source landing page which built for startups just like yours. 
            My aim is to help you when you boldly go where no one has gone before 🚀"
            />
           
        </div>
    );
}

export default Landing;