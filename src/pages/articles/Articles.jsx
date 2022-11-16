import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import cl from './Articles.module.css'

const Articles = () => {
    return (

    <div className={cl.wrapper}>
        <h2> Статьи </h2>
        <div> В разработке</div>
    </div>   

    );
};

export default Articles;