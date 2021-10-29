import React from 'react';
import Application from '../Application/Application';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Offers from '../Offers/Offers';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <Offers></Offers>
            <Service></Service>
            <Application></Application>
            
        </div>
    );
};

export default Home;