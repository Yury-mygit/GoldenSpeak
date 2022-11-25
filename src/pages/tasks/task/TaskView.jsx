import React, { useState } from 'react';
import cl from '../Styles/Tasks.module.scss'

const TaskView = ({id, desk, image, imageExt, setTask}) => {

    

    

    return (
        <div 
            className={cl.taskview__wrapper} 
            style={{ backgroundImage: `url(${image})`,}}
            onClick={()=>{setTask(id);}}
        >
            <h3>{desk}</h3>

        </div>
    );
};

export default TaskView;

const TaskViewPort = () => {
    return (

        <div> Задача </div>

    )
}
                 