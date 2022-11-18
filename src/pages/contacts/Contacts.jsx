import React from 'react';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import logo from './Logo.png'

import cl from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={cl.wrapper}>
            <h2> Наши контакты </h2>
            <img src={logo} className={cl.logo}/>
            <div>
                <div> Мы работаем по всей России, очно и online.</div>
                <div> Звоните и пишите в Whats Upp на наш прямой номер:  </div>
                <div> +7 985-888-63-31, пн-вс с 9:00 до 21:00. </div>   
                <div>Также вы можете связаться с нами по E-mail:</div>
                <div>goldenspeak@mail.ru</div> 
            </div>
        </div>
    );
};

export default Contacts;