import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
            <h1>Hello from Home</h1>
            <FontAwesomeIcon icon={faStar} />
        </div>
    );
};

export default Home;
