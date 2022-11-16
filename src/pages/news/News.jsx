import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import cl from './style/News.module.css'

const News = () => {
    return (  
        <div className={cl.wrapper}>
            <h2> Новости </h2>
            <div> В разработке</div>
        </div>     
    );
};

export default News;