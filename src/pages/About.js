import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import ImgBanner2 from '../assets/images/Banner2.jpg'
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';

const About = () => {
    document.title = "Kasa - A Propos de Nous";
    return (
        <div className='body'>
            <div className='layout'>
                <Nav />
                <Banner
                    txt=""
                    img={ImgBanner2}
                    className="Banner"
                    alt="Présentation de falaises"
                />
                <Collapse />
            </div>
            <Footer />
        </div>
    );
};

export default About;