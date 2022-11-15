import React from 'react';
import Nav from '../components/Nav'
import Card from '../components/Card'
import Banner from '../components/Banner';
import ImgBanner from '../assets/images/Banner1.jpg'
import DB from '../assets/db.json'
import Footer from '../components/Footer';

const Home = () => {

    document.title = "Kasa - Accueil";

    return (
        <div className='body'>
            <div className="layout">
                <Nav />
                <Banner
                    txt="Chez vous, partout et ailleurs"
                    img={ImgBanner}
                    className="Banner"
                    alt="Présentation de falaises"
                />
                <div className='Home-lodging'>
                    <ul>
                        {DB.map((lodging) =>
                            <Card
                                key={lodging.id}
                                lodging={lodging}
                            />
                        )}
                    </ul>
                </div>
            </div>
            <Footer />


        </div>
    );
};

export default Home;
