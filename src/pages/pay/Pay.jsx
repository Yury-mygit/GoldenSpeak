import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SecurityPolicy from './components/SecurityPolicy';
import arrow_up from './arrow_up_fonless.png'

import cl from './Pay.module.css'

const Pay = () => {
    return (
        <div className={cl.wrapper}>
            <div>
                <h2> Оплата </h2>
                <div> В разработке</div>
            </div>
            <SecurityPolicy/>
        </div>
    );
};

export default Pay;