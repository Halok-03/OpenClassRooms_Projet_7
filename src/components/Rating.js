import React from 'react';

const Rating = (props) => {

    const totalStars = []

    const starGood = <i className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>

    const starBad = <i className="fa-solid fa-star" style={{ color: '#E3E3E3' }}></i>

    const numberStarBad = 5 - props.rating

    for (let i = 0; i < props.rating; i++) {
        totalStars.push(starGood)
    }

    for (let i = 0; i < numberStarBad; i++) {
        totalStars.push(starBad)
    }

    return (
        <div className='lodging-host-rating'>
            {totalStars.map((star, index) => {
                { return <span key={index}>{star}</span> }
            })}
        </div >
    );
};

export default Rating;