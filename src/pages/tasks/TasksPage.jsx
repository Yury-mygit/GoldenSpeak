import React from 'react';
import { useState } from 'react';
import TaskList from './TaskList/TaskList';

import TaskMenu from './taskMeny/TaskMenu';

import cl from './Styles/Tasks.module.scss'

import img_01 from '../../media/FindTheExtra_01.jpg'
import img_01_e from '../../media/FindTheExtra_01_ext.jpg'

import img_02 from '../../media/FindTheExtra_02.jpg'
import img_02_e from '../../media/FindTheExtra_02_ext.jpg'

import img_03 from '../../media/FindTheExtra_03.jpg'
import img_03_e from '../../media/FindTheExtra_03_ext.jpg'

import img_04 from '../../media/FindTheExtra_04.jpg'
import img_04_e from '../../media/FindTheExtra_04_ext.jpg'
import TaskModal from './TaskModal';

let tasks = [
    {id:0 , type: 'findExtra', deskription:'Найдите лишнее', image: img_01, imageExt: img_01_e},
    {id:1 , type: 'findExtra', deskription:'Найдите лишнее', image: img_02, imageExt: img_02_e},
    {id:2 , type: 'findExtra', deskription:'Найдите лишнее', image: img_03, imageExt: img_03_e},
    {id:3 , type: 'findExtra', deskription:'Найдите лишнее', image: img_04, imageExt: img_04_e},
]


const TasksPage = () => {

    const [taskModal, setTaskModal] = useState(-1)
    
    // console.log(taskModal)

    let modal = taskModal >= 0
        ? 
        <TaskModal 
            taskModal={taskModal} 
            setTask={setTaskModal}
            data={tasks[taskModal]}
        /> 
        : 
            ''

    return (
        <div className={cl.taskpage__wrapper}>
                <TaskMenu/>
                {modal}
                <TaskList tasks={tasks} setTask={setTaskModal}/>
                
        </div>
    );
};

export default TasksPage;