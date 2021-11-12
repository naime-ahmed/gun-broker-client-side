import React from 'react';
import './TopBanner.css';
import bannerImg from '../../../images/topbanner.jpg';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className="top-banner-text">
                <h1>WELCOME TO <span>GunBroker</span> <br /><br /> BEST SHOOTING RANGE & GUN CLUB SINCE 2006</h1>
                <p>Passionate about guns? GunBroker.com is the perfect place for you! GunBroker.com is a marketplace of gun enthusiasts dedicated to sharing our affinity for guns. Here you can buy guns online, find guns for sale online, discover new guns, and get information about guns. Think of GunBroker.com as your gun spot for all things guns. The GunBroker.com marketplace goes beyond guns for sale, and offers hunting gear, gun parts / accessories, collectibles, and much more.</p>
            </div>
            <div className="top-banner-img">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default TopBanner;