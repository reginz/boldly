import React from 'react';
import Features from '../components/partials/Features';
import Landing from '../components/partials/Landing';

function Home() {
    return (
        <div style={{
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:"center"
        }}>
            <Landing 
            text="This is a landing page for loooong startups"
            subText="This page is beautiflly designed for your startup. Download it on GitHub and use it on your own project."
            ></Landing>
            <Features></Features>
        </div>
    );
}

export default Home;