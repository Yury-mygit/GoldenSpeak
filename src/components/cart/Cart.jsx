import React from 'react';
import cart from './Cart.png';
import cl from './Cart.module.css'
import { ThemeContext } from '../../App';

import {useContext } from 'react';

const Cart = () => {

    const theme = useContext(ThemeContext);

    if (theme.data)
        return (
            <div className={cl.wrapper} onClick = {()=>theme.setData(2000)}>
                <div className={cl.imgContent}>
                    <img 
                    src={cart}
                    className={cl.img}
                    /> 
                </div>
                
            
                <div className={cl.amount}> 
                { theme.data }
                </div> 
            </div>
        );
    else return <></>    
};

export default Cart;