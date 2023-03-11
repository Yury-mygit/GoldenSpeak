import React from 'react';
import cl from './ErrorPage.module.scss'

const ErrorPage = () => {
    return (
        <div className={cl.wrapper}>
            "Это страница ошибки" Произошла ошибка...
        </div>
    );
};

export default ErrorPage;