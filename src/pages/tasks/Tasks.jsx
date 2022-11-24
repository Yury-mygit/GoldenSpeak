import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Task from './task/Task';

import cl from './Tasks.module.css'

const Tasks = () => {
    return (
        <div className={cl.wrapper}>
            
                <h2> Задания </h2>
                <Task/>
        </div>
    );
};

export default Tasks;