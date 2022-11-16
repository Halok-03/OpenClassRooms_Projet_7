import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useParams, Navigate } from "react-router-dom";
import DB from '../assets/db.json';
import Carrousel from '../components/Carrousel';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

const Lodging = () => {

    document.title = "Kasa - Logement";

    let selectedId = useParams();
    let title;
    let pictures;
    let description;
    let hostName;
    let hostPicture;
    let rating;
    let location;
    let equipments;
    let tags;

    DB.forEach((lodging) => {
        if (selectedId.id === lodging.id) {
            title = lodging.title;
            pictures = lodging.pictures;
            description = lodging.description;
            hostName = lodging.host.name;
            hostPicture = lodging.host.picture;
            rating = lodging.rating;
            location = lodging.location;
            equipments = lodging.equipments;
            tags = lodging.tags;
        }
    })

    if (title === undefined) {
        return <Navigate to="/404" />
    }

    let hostNameSeparator = hostName.split(' ');

    return (
        <div className='body'>
            <div className="layout">
                <Nav />
                <Carrousel
                    pictures={pictures}
                    title={title}
                />
                <div className="lodging">
                    <div className='lodging-description'>
                        <h2 className='lodging-title'>{title}</h2>
                        <p className='lodging-location'>{location}</p>
                        <ul className='lodging-list-tag'>
                            {tags.map((tag, index) =>
                                <li key={index} >
                                    <span>{tag}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="lodging-host">
                        <Rating
                            rating={rating}
                        />
                        <div className="lodging-host-personn">
                            <div className='lodging-host-personn-name'>
                                <span>{hostNameSeparator[0]}</span>
                                <span>{hostNameSeparator[1]}</span>
                            </div>
                            <img src={hostPicture} alt="Propriétaire" />
                        </div>
                    </div>
                </div>
                <div>
                    <Collapse
                        title="Description"
                        description={description} />
                    <Collapse
                        title="Equipements"
                        description={equipments}

                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Lodging;