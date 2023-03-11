import React from 'react';
import cl from './Controls.module.scss'

const Controls = () => {
    return (
        <div className={cl.controll}>
                <button> назад </button> 
                <div> ... </div>
                <button> вперед </button>
            </div>
    );
};

export default Controls;