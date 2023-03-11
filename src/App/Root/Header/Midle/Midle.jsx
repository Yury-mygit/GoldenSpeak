import React from 'react';
import cl from './Midle.module.scss'
import StButton from '../../../../Componnts/Buttons/StButton'

const Midle = () => {
    return (
        <div className={cl.wrapper}> 
            <div className={cl.telefon}><p>Whats App:&nbsp;&nbsp; </p><a href="tel:+74951234567" >+7 (495) 123-45-67</a></div> 
            <StButton
                text='Заказать звонок'
                ExternCL={cl.button}
            />
        </div> 
    );
};

export default Midle;