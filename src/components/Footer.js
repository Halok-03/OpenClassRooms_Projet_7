import React from 'react';
import Logo from '../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <div className='footer' >
            <img src={Logo} alt="Logo Kasa" />
            <p><i className="fa-regular fa-copyright copyright-white"></i> 2020 Kasa. All rights reserved</p>
        </div >
    );
};

export default Footer;