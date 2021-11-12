import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import PowerfulGun from './PowerfulGun/PowerfulGun';
import ShowReview from './ShowReview/ShowReview';
import TopBanner from './TopBanner/TopBanner';
import TopServices from './TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <TopBanner />
            <TopServices />
            <PowerfulGun />
            <ShowReview />
            <Footer/>
        </div>
    );
};

export default Home;