import React from 'react';
import Landing from '../components/Landing';

function Home() {
    return (
        <div style={{
            width: "100%",
            display: 'flex',
            alignItems: 'center',
            justifyContent:"center"
        }}>
            <Landing 
            text="This is a landing page for loooong startups"
            subText="This page is beautiflly designed for your startup. Download it on GitHub and use it on your own project."
            ></Landing>
        </div>
    );
}

export default Home;