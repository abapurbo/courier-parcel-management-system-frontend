import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Testimonials from '../Testimonials/Testimonials';
import ServicesSection from '../ServiceSection/ServiceSection';
import HowItWorks from '../../HowToWorks/HowToWorks';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;