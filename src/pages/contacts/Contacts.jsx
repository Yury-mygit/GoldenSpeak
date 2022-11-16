import React from 'react';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import cl from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={cl.wrapper}>
            <h2> Контакты </h2>
            <div> В разработке</div>
        </div>
    );
};

export default Contacts;