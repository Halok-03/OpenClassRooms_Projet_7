import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../style/Pages/_lodging.scss';
import Nav from '../components/Nav';

const Lodging = () => {
    document.title = "Kasa - Logement";
    return (
        <div className='body-margin'>
            <Nav />
            <h1>Hello from product</h1>
            <FontAwesomeIcon icon={faStar} />
        </div>
    );
};

export default Lodging;