import React from 'react';
import './PowerfulGun.css';
import gun from '../../../images/powerful-gun.jpg';

const PowerfulGun = () => {
    return (
        <div>
            <div className="powerful-gun-header">
                <h1>Most <span>POWERFUL GUN</span> in our store</h1>
            </div>
            <div className="powerful-gun">
                <div className="powerful-gun-img">
                    <img src={gun} alt="" />
                </div>
                <div className="powerful-gun-text">
                    <h1>FN Herstal Minimi M249 PARA AEG Full Metal Dark Earth</h1>
                    <p>A gun that goes by a variety of names, including the M249 SAW, the Minimi is a belt-fed light machine gun that can fire up to 1,000 rounds per minute. Unlike the other machine guns on the list, this can be carried and fired by one man, on the move or from a stationary position. This ability to maneuver makes it a go-to gun for armies around the world – almost 50 have adopted it for use, while a number of other countries have produced unlicensed models for use.</p>
                </div>
            </div>
        </div>
    );
};

export default PowerfulGun;