import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Lodging = () => {

    document.title = "Kasa - Logement";

    return (
        <div className='body'>
            <div className="layout">
                <Nav />
                <h1>Hello from product</h1>
                <FontAwesomeIcon icon={faStar} />
            </div>
            <Footer />
        </div>
    );
};

export default Lodging;