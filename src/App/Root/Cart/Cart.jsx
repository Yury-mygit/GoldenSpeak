import React, { useState } from 'react';
import cart from './Cart.png';
import cl from './Cart.module.css'
import { ThemeContext } from '../../App';

import {useContext } from 'react';

import merchant from './PayBoxWidget'

const merch = new merchant();

const Cart = () => {

    const theme = useContext(ThemeContext);
    const [fullWindow, setFullWindow] = useState(false)

    if (theme.data && !fullWindow)
        return (
            <div className={cl.wrapper} onClick = {()=>setFullWindow(true)}>
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
    else if (!theme.data && !fullWindow) return <></> 
    else if (theme.data && fullWindow) 
            return(
                <div className={cl.full__wrapper}>
                    <div className={cl.full__content}>
                        <div>{theme.data}</div>
                        <button onClick={()=>{ merch.initPayment(
                    theme.data,
                    { 
                      order:100, 
                      language:'ru',
                      currency:'RUB', 
                      description:'Description из клиента',
                      receipt_positions: [
                          {
                            count: 2,
                            name: "Коврик для мыши",
                            tax_type: 3,
                            price: 1000
                          },
                          {
                            count: 2,
                            name: "Розетка",
                            tax_type: 3,
                            price: 1000
                          }
                        ],        
                      custom_params: {
                          parametr1:'2323',
                          parametr2:'2323',
                          parametr3:'2323',
                          parametr4:'2323'
                      },         

                    }
                    )}} >оплатить</button>
                        
                    </div>
                </div>
            )
};

export default Cart;