import React, { useState,useContext } from 'react';
import { ThemeContext } from '../../../App';
import ActionButton from '../../common/ActionButton';

import cl from './FirstLine.module.scss'

import logo from './Logo.png'

const FirstLine = () => {

    const [buttonOn, serbuttonOn] = useState(false)
    const modalWindow = useContext(ThemeContext)

    return (
        <div className={cl.firstLine_wrapper} > 
            <div className={cl.logo}>
                <img src={logo}/>
            </div>
 
            <ActionButton 
                text={'Заказать звонок'} 
                action={()=>modalWindow.setModal(!modalWindow.modal)}
            />
                          
        </div> 
    );
};

export default FirstLine;


const styles = {
    component : {
        height: '50px',
        display: 'flex',
        justifyContent: "space-between"
    },
    st_item : {
        
        width:"200px",
        // border:'1px solid black'
    }
}
