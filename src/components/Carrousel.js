import React from 'react';
import Chevron from '../assets/images/chevron.svg';

const Carrousel = (props) => {
    return (
        <div className='carrousel'>
            <img src={props.pictures[0]} alt="" />
            <img
                src={Chevron}
                alt="chevron"
                className="chevron-carrousel-left chevron-carrousel" />
            <img
                src={Chevron}
                alt="chevron"
                className="chevron-carrousel-right chevron-carrousel" />
        </div>
    );
};

export default Carrousel;