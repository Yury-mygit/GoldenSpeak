import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Left.module.scss'

const Left = ({unauthorizedMenuItems, logo}) => {
    return (
        <div className={cl.wrapper}>
            <div className = {cl.logo}>
                <img src={logo} />
            </div>
            <div>{  unauthorizedMenuItems.map(i=>
                    
                        <Link 
                            to={i.path}  
                            key={i.id}  
                            className={cl.item}
                        > {i.title} </Link>)   }</div>
        </div>
    );
};

export default Left;