import React from 'react';
import Banner from './Banner/Banner';
import CategorySwiper from './Category/CategorySwiper';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
         <Banner/>
         <CategorySwiper/>
         <PopularMenu/>
         <Featured/>
         <Testimonial/>
        </div>
    );
};

export default Home;