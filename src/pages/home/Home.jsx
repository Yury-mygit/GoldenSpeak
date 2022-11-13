import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Home = () => {
    return (
        <div style={{height: '100vh' }}>
            <Header/>
            <div style={{height: '500px' }}> 
                <div>блок 1</div>
            </div>
           
            <Footer/>
        </div>
    );
};

export default Home;


сщтые 