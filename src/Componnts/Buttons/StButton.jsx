import React from 'react';
import { Link } from 'react-router-dom';
import cl from './StButton.module.scss'

const StButton = ({text, action, StStyle='', ExternCL="undefined"}) => {

    // console.log(ExternCL==='undefined' ? cl.wrapper : ExternCL)

    return (
        <button            
            className={ExternCL==='undefined' ? cl.wrapper : ExternCL}
            onClick = {action}
        > {text} </button>
    );
};

export default StButton;


