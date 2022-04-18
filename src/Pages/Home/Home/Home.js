import React from 'react';
import HealthyItems from '../HealthyItems/HealthyItems';
import Ingredient from '../Ingredients/Ingredient';
import OurStory from '../OurStory/OurStory';
import Reservations from '../Reservations/Reservations';
import TopSlider from '../TopSlider/TopSlider';

const Home = () => {
    return (
        <main>
            <TopSlider/>
            <OurStory/>
            <Ingredient/>
            <HealthyItems/>
            <Reservations/>
        </main>
    );
};

export default Home;