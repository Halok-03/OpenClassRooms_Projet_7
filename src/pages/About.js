import React from 'react';
import '../style/Pages/_about.scss';
import Nav from '../components/Nav';

const About = () => {
    return (
        <div className='body-margin'>
            <Nav />
            <h1>Hello from About</h1>
        </div>
    );
};

export default About;