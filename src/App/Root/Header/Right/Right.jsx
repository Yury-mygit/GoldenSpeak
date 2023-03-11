import React from 'react';
import { Link } from 'react-router-dom';
import StButton from '../../../../Componnts/Buttons/StButton';
import cl from './Right.module.scss'

const Right = ({authorizedMenuItems}) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.itemslist}>
                { authorizedMenuItems.map(i=>
                        
                    <Link 
                        to={i.path}  
                        key={i.id}  
                        className={cl.item}
                    >
                        <StButton text={i.title} />
                    </Link>
                )}
            </div>

            <div className={cl.rightflow}>
                
                <div className={cl.exit}>выйти</div>

                <div className={cl.personalBlock}>
                             <Link 
                                to={'personal-area'}  
                                 
                                // className={cl.personal}
                            >
                                <StButton 
                                    text={'Персональная зона'} 
                                    ExternCL={cl.personal}
                                />
                             </Link>
                </div>
            </div>
        </div>
    );
};

export default Right;




