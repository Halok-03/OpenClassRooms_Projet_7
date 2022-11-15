import React from 'react';
import Nav from '../components/Nav';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';

const Page_404 = () => {
    document.title = "Kasa - Error 404";
    return (
        <div className='body'>
            <div className="layout">
                <Nav />
                <div className='container-error'>
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <NavLink to="/">Retourner sur la page d’accueil</NavLink>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page_404;