import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import cl from './Club.module.css'


const Club = () => {
    return (
        <div className={cl.wrapper}>
            <h2> Клуб </h2>
            <div> В разработке</div>
        </div>  
    );
};

export default Club;