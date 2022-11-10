import React from 'react';
import '../style/Pages/_about.scss';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import ImgBanner2 from '../assets/images/Banner2.jpg'

const About = () => {
    document.title = "Kasa - A Propos de Nous";
    return (
        <div className='body-margin'>
            <Nav />
            <Banner
                txt=""
                img={ImgBanner2}
                className="Banner"
                alt="Présentation de falaises"
            />
            <h1>Hello from About</h1>
        </div>
    );
};

export default About;