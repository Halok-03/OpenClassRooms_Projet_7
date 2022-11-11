import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Page_404 = () => {
    document.title = "Kasa - Error 404";
    return (
        <div className='body'>
            <div className="layout">
                <Nav />
                <h1>Error 404</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Page_404;