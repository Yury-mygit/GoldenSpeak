import React from 'react';
import { Link } from 'react-router-dom';
import StButton from '../../components/common/StButton';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import cl from './Page404.module.css'

const Page404 = () => {
    return (
        <div className={cl.wrapper}>
            <Header/>
            <div className={cl.content} >
                Такой странице не существует
               <StButton text={"Главная"} link={'/'}></StButton>
            </div>
            <Footer/>
        </div>
        
    );
};

export default Page404;