import React from 'react';
import Banner from './Banner/Banner';
import CategorySwiper from './Category/CategorySwiper';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>
        Bistro Boss | Home</title>
        <meta name="description" content="Home page" />
      </Helmet>
         <Banner/>
         <CategorySwiper/>
         <PopularMenu/>
         <Featured/>
         <Testimonial/>
        </div>
    );
};

export default Home;