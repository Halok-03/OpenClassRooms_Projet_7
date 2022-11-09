import React from 'react';
import '../style/Pages/_page-error.scss';
import Nav from '../components/Nav';

const Page_404 = () => {
    return (
        <div className='body-margin'>
            <Nav />
            <h1>Error 404</h1>
        </div>
    );
};

export default Page_404;