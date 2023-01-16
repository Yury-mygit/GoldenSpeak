import React from 'react';
import settings from '../../../../general/settings';
import { useState, useEffect } from 'react';
import {useGetTaskPageDataQuery} from '../../../../API/pageAPI'
import {useGetTasksQuery} from '../../../../API/tasksAPI'
import cl from './BlockTask.module.scss'
import TaskList from './TaskList/TaskList';
import TaskMenu from './TaskMenu/TaskMenu'
import TaskModal from './TaskModal/TaskModal';


const BlockTask = () => {

    const { data, isError, isLoading, isFetching } = useGetTasksQuery()
    // const { data, isError, isLoading, isFetching } = useGetTaskPageDataQuery()

    const [taskModal, setTaskModal] = useState(-1)
    
    if (isLoading) return <div>Loading ...</div>

    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <TaskMenu/>
               
                <TaskList
                    data={data}
                    setTaskModal={setTaskModal}
                />

                <TaskModal 
                    taskModal={taskModal} 
                    setTask={setTaskModal}
                    data={data[taskModal-1]}
                /> 

                
            </div>
        </div>
    );
    
};

export default BlockTask;