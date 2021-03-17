import React from 'react';
import Main from './Main';
import Favorites from './Favorites';
import FlowerSection from './FlowerSection';
import Banner from './Banner';

import PaymentContainer from './PaymentContainer';

const Home = ( ) => {
    return (

        <div>
        <Main />
        <Favorites />
        <FlowerSection />
        <Banner />
        <PaymentContainer />
        </div>
    )
}


export default Home; 