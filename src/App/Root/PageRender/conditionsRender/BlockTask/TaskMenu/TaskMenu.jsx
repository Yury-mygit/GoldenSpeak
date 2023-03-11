import React from 'react';
import cl from './TaskMenu.module.scss'
import MenyType1 from '../../../../../../Componnts/MenuType1/MenyType1';
import Filter from '../../../../../../Componnts/FilterComponent/Filter';
import Counter from '../../../../../../Componnts/Counters/Counter';

const TaskMenu = ({outputCount=5, setOutputCount, outputCountOptions=[], filter, setFilters}) => {
    // console.log(filter)


    let direction = [
        {type: 'findExtra1',  description: 'Найдите лишнее',  id: 0, checked: true},
        {type: 'findExtra2',  description: 'Описание 2',      id: 1, checked: true},
        {type: 'findExtra3',  description: 'Описание 3',      id: 2, checked: true},
        {type: 'findExtra4',  description: 'Описание 4',      id: 3, checked: true},
    ]
    
    let lauers = [
        {type: 'findExtra1',  description: 'Найдите лишнее',  id: 0, checked: true},
        {type: 'findExtra2',  description: 'Описание 2',      id: 1, checked: true},
        {type: 'findExtra3',  description: 'Описание 3',      id: 2, checked: true},
        {type: 'findExtra4',  description: 'Описание 4',      id: 3, checked: true},
    ]

  


    return (
        <MenyType1
            styleClass = {cl.task_menu}
        >
            <Filter 
                title = {'Типы задач'}
                filter = {filter}
                setFilters = {setFilters}
            />

            <Filter 
                title = {'Направления'}
                filter = {direction}
                // setFilters = {setFilters}
            />

            <Filter 
                title = {'Уравни'}
                filter = {direction}
                // setFilters = {setFilters}
            />

            <div>sdsd</div>
            <Counter
                count       = {outputCount}
                setCount    = {setOutputCount}
                options     = {outputCountOptions}
                ExternCL    = {cl.counter}
            />

        </MenyType1>
    );
};

export default TaskMenu;