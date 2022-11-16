import React, { useEffect, useState } from 'react';
import Chevron from '../assets/images/chevron.svg';

const Carrousel = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [toggleLength, setToggleLength] = useState(true)

    useEffect(() => {
        if (props.pictures.length === 1) {
            setToggleLength(false)
        }
    }, [props.pictures.length])


    const clickLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(props.pictures.length - 1);
        }
    }

    const clickRight = () => {
        if (currentIndex < props.pictures.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    }

    return (
        <div className='carrousel'>
            <img src={props.pictures[currentIndex]} alt={'logement' + ' ' + props.title} className='photo' />
            <img
                src={Chevron}
                alt="chevron"
                className={toggleLength ? "chevron-carrousel-left chevron-carrousel" : 'display-none'}
                onClick={clickLeft} />
            <img
                src={Chevron}
                alt="chevron"
                className={toggleLength ? "chevron-carrousel-right chevron-carrousel" : 'display-none'}
                onClick={clickRight} />
            <p className={toggleLength ? 'counter-carrousel' : 'display-none'}>{currentIndex + 1}/{props.pictures.length}</p>
        </div>
    );
};

export default Carrousel;