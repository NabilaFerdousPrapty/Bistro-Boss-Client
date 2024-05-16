import React from 'react';
import Banner from './Banner/Banner';
import CategorySwiper from './Category/CategorySwiper';
import PopularMenu from './PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
         <Banner/>
         <CategorySwiper/>
         <PopularMenu/>
        </div>
    );
};

export default Home;