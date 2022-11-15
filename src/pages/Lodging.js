import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useParams, Navigate } from "react-router-dom";
import DB from '../assets/db.json';
import Carrousel from '../components/Carrousel';

const Lodging = () => {

    document.title = "Kasa - Logement";

    let selectedId = useParams();
    let title;
    let cover;
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
            cover = lodging.cover;
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

    return (
        <div className='body'>
            <div className="layout">
                <Nav />
                <Carrousel
                    pictures={pictures} />
            </div>
            <Footer />
        </div>
    );
};

export default Lodging;