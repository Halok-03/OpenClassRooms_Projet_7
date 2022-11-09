import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../style/Pages/_home.scss';
import Nav from '../components/Nav'

const Home = () => {
    return (
        <div className='body-margin'>
            <Nav />
            <FontAwesomeIcon icon={faStar} />
        </div>
    );
};

export default Home;
