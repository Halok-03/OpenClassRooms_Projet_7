import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../assets/images/logo.png'


const Nav = () => {
    return (
        <header id='header-nav'>
            <img src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;