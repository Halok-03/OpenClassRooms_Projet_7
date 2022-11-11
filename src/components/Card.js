import React from 'react';
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (

        <li>
            <NavLink to={`/lodging/${props.lodging.id}`} >
                <img src={props.lodging.cover} alt={props.lodging.title} />
                <h2>{props.lodging.title}</h2>
                <p className='description'>{props.lodging.description}</p>
            </NavLink>
        </li >
    );
};

export default Card;