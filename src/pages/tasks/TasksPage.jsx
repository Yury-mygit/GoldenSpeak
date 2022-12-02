import React from 'react';
import { useState } from 'react';
import TaskList from './TaskList/TaskList';
import cl from './Styles/Tasks.module.scss'

const TasksPage = () => {

    return (
        <div className={cl.taskpage__wrapper}>
                
                <TaskList/>
                
        </div>
    );
};

export default TasksPage;