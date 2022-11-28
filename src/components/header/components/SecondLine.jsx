import React from 'react';
import { Link } from 'react-router-dom';

const SecondLine = () => {
    return (
        <div style={{...styles.container}}>
                <Link to={'/'}         style={{...styles.links}}> Главная </Link>
                {/* <Link to={'/about'}     style={{...styles.links}}> О нас </Link> */}
                <Link to={'/news'}      style={{...styles.links}}> Новости</Link>
                <Link to={'/articles'}  style={{...styles.links}}> Статьи </Link>
                <Link to={'/pay'}       style={{...styles.links}}> Оплата </Link>
                <Link to={'/contacts'}  style={{...styles.links}}> Контакты </Link>
                {/* <Link to={'/club'}      style={{...styles.links}}> Клуб логопедов </Link> */}
                <Link to={'/tasks'}     style={{...styles.links}}> Задания </Link>
            </div>
    );
};

export default SecondLine;

const links__container = {
    marginLeft: '25px',
    display: 'flex',
    flexDirection: 'row',
    height:'50px',
}

const links = {
    margin: '10px',
    textDecoration: 'none',
}

const styles = {
    container : {
       
        display: 'flex',
        flexDirection: 'row',
        height:'50px',
    },
    links : {
        margin: '10px 30px 10px 10px',
        textDecoration: 'none',
        color:'black',
        fontSize:'20px'
    }
}