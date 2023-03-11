import React from 'react';
import cl from './TaskHeader.module.scss'

const TaskHeader = () => {
    return (
        <div className={cl.wrapper} >
            <p className={[cl.id, cl.br].join(' ')}>Номер задачи</p>
            <p className={[cl.type, cl.br].join(' ')}>Тип задачи</p>
            <p className={[cl.direction, cl.br].join(' ')}>Направление</p>
            <p className={[cl.level, cl.br].join(' ')}>Уровень</p>
            <p className={[cl.date, cl.br].join(' ')}>Дата</p>
        </div>
    );
};

export default TaskHeader;