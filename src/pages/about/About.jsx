import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const About = () => {
    return (
        <div>
            <Header/>
            <div style={{height: '500px' }}> 
                О нас стараница
            </div>
           
            <Footer/>
        </div>
    );
};

export default About;