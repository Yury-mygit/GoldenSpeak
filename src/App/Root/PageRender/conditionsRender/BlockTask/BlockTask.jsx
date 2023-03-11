import React from 'react';
import { useState, useEffect } from 'react';
import {useGetTasksQuery, useGetTasksTypesQuery} from '../../../../../API/tasksAPI'
import cl from './BlockTask.module.scss'
import TaskList from './TaskList/TaskList';
import TaskMenu from './TaskMenu/TaskMenu'
import TaskModal from './TaskModal/TaskModal';
import TaskPreview from './TaskPreview/TaskPreview';


const BlockTask = () => {

   

    let tasksCountOptions = [5,10,20,40]

    const [taskCount, setTaskCount] = useState(5)
    const [taskModal, setTaskModal] = useState(-1)
    const [filter , setFilters] = useState([])
    const { data:filterTypes, isError:filterTypesIsError, isLoading:filterTypesIsLoading, isFetching:filterTypesIsFetching } = useGetTasksTypesQuery()
    const { data, isError, isLoading, isFetching } = useGetTasksQuery(taskCount)
  
    let f
    // let dataList  = structuredClone(data)
    console.log(filterTypes)

    useEffect(()=>{
            if (filterTypes!=undefined)  {
                f = filterTypes.slice().map((i)=>{
                    let a = {...i, 'checked':true}
                    return a
                })
                setFilters([...f])
            }
        // }
       
    },[filterTypesIsLoading])



    if (filterTypesIsLoading || isLoading) return <div>Loading ...</div>


    return (
        <div className={cl.wrapper}>
                <TaskModal 
                    taskModal={taskModal} 
                    setTask={setTaskModal}
                    data={data[taskModal-1]}
                /> 
            
                <TaskMenu
                    outputCount = {taskCount}
                    setOutputCount = {setTaskCount}
                    outputCountOptions = {tasksCountOptions}
                    filter = {filter}
                    setFilters = {setFilters} 
                />
               
                <TaskList
                    data={data}
                    setTaskModal={setTaskModal}
                    filter = { filter }
                />



                <TaskPreview />  
            
        </div>
    );
    
};

export default BlockTask;

