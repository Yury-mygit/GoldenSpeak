import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Right.module.scss'

const Right = ({authorizedMenuItems}) => {
    return (
        <div className={cl.wrapper}>
                {
                    authorizedMenuItems.map(i=>
                    
                        <Link 
                            to={i.path}  
                            key={i.id}  
                            className={cl.item}
                        > {i.title} </Link>)
                }
                <div className={cl.rightflow}>
                    <div>sdsd</div>
                </div>
            </div>
    );
};

export default Right;