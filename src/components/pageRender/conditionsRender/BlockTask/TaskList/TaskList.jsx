import React, {createElement as e} from 'react';
import cl from './TaskList.module.scss'
import TaskItem from './TaskItem/TaskItem'; 
                    
const TaskList = ({data, setTaskModal, editTaskModalShow , setEditTaskModalShow}) => {

    return (
        <div className={cl.wrapper}>
            {data.map((i)=>{
                return (
                    <TaskItem 
                    key={i.id} 
                    id={i.id}
                    desk={i.deskription}
                    image={i.img_url}
                    imageExt={i.imgext_url}
                    setTask={setTaskModal}
                />

                )
            })}
        </div>
    );
};

export default TaskList;