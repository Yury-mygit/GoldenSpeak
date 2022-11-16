import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import cl from './Page404.module.css'

const Page404 = () => {
    return (
        <div className={cl.wrapper}>
            <Header/>
            <div className={cl.content} >
                Такой странице не существует
            </div>
            <Footer/>
        </div>
        
    );
};

export default Page404;