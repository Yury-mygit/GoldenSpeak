import React from 'react';
import TaskView from '../task/TaskView';
import cl from '../Styles/Tasks.module.scss';

const TaskList = ({tasks, setTask}) => {
    return (
        <div className={cl.tasklist__wrapper}>
            {tasks.map((task)=>{
                return (
                <TaskView 
                  key={task.id} 
                  id={task.id}
                  desk={task.deskription}
                  image={task.image}
                  imageExt={task.imageExt}
                  setTask={setTask}
                />
                )
            })}
        </div>
    );
};

export default TaskList;