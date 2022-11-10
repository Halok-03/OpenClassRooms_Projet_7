import React from 'react';
import { NavLink } from "react-router-dom";
import '../style/Components/_card.scss'

const Card = (props) => {
    return (

        <li>
            <NavLink to={`/lodging/${props.lodging.id}`} >
                <img src={props.lodging.cover} alt={props.lodging.title} />
                <h2>{props.lodging.title}</h2>
            </NavLink>
        </li >
    );
};

export default Card;