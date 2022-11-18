import React from 'react';
import cl from './PayModal.module.css'
import cross from './cross.png'

const PayModal = ({children, action,data}) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div 
                    style={{ backgroundImage: `url(${cross})` }}
                    className={cl.cross}
                    onClick={()=>action(!data)}
                >     
                </div>
                {children}
            </div>
        </div>
    );
};

export default PayModal;