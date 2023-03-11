import React, {createElement as e} from 'react';
import cl from './TaskList.module.scss'
import TaskItem from './TaskItem/TaskItem'; 
import TaskHeader from './TaskHeader/TaskHeader';
                    
const TaskList = ({data, setTaskModal, editTaskModalShow , setEditTaskModalShow, filter}) => {

   

    return (
        <div className={cl.wrapper}>
            <TaskHeader/>
            {data.map((i)=>{
                
                let curentFilter = filter.filter(f=>f.type == i.type)[0]

                if (curentFilter===undefined) return''
                
                if (i.type == curentFilter.type && curentFilter.checked==false) return ''
                // console.log(i)
                return (
                    <TaskItem 
                        key={i.id} 
                        id={i.id}
                        desk={i.description}
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