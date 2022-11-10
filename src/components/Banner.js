import React from 'react';
import '../style/Components/_banner.scss'

const Banner = (props) => {
    return (
        <div className={props.className} >
            <img
                src={props.img}
                alt={props.alt}
            />
            <h1>{props.txt}</h1>
        </div>
    );
};

export default Banner;