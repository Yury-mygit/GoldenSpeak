import React from 'react';
import cl from './LoadingPage.module.scss'

const LoadingPage = () => {
    return (
        <div className={cl.wrapper}>
            Идет загрузка, пожалуйста, подождите
        </div>
    );
};

export default LoadingPage;