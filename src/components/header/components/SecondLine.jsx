import React from 'react';
import { Link } from 'react-router-dom';

const SecondLine = () => {
    return (
        <div style={{...links__container}}>
                <Link to={'/'}         style={{...links}}> Главная </Link>
                <Link to={'/about'}     style={{...links}}> О нас </Link>
                <Link to={'/news'}      style={{...links}}> Новости</Link>
                <Link to={'/articles'}  style={{...links}}> Статьи </Link>
                <Link to={'/pay'}       style={{...links}}> Оплата </Link>
                <Link to={'/contacts'}  style={{...links}}> Контакты </Link>
                <Link to={'/club'}      style={{...links}}> Клуб логопедов </Link>
                <Link to={'/tasks'}     style={{...links}}> Задания </Link>
            </div>
    );
};

export default SecondLine;

const links__container = {
    marginLeft: '25px',
    display: 'flex',
    flexDirection: 'row',
}

const links = {
    margin: '10px',
    textDecoration: 'none',
}