import React, { useState } from 'react';
import cl from './TaskItem.module.scss'
import settings from '../../../../../../../general/settings';

const TaskItem = ({id, desk, image, imageExt, setTask}) => {

    return (
        <div 
            className={cl.taskview__wrapper} 
            
            onClick={()=>{setTask(id);}}
        >
            <p className={cl.id}>{id}</p>
            <p className={cl.id}>{desk}</p>
            <p className={cl.id}>Направление</p>
            <p className={cl.id}>Уровень</p>
            <p className={cl.id}>Дата</p>

        </div>
    );
};

export default TaskItem;

const TaskViewPort = () => {
    return (

        <div> Задача </div>

    )
}
                 