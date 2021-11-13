import React from 'react';
import './WelcomeDs.css';
import welcomeImg from '../../images/welcome-img.jpg';

const WelcomeDs = () => {
    return (
        <div className="welcome-dashboard">
            <div className="welcome-img">
                <img src={welcomeImg} alt="" />
            </div>
        </div>
    );
};

export default WelcomeDs;