import React from 'react';
import cl from './Filter.module.scss'

const Filter = ({
        title = 'фильтр', 
        action = (data)=>{console.log(data)}, 
        StStyle='', 
        filter,
        setFilters,
    }) => {

    // action(types)
    // console.log(filter)

    return (
        <div className={cl.wrapper}>
            <div className={cl.title}>{title}</div>
            {filter.map(i=>{
                return(
                    <div  key = {i.id} className={cl.item}> 
                        <input 
                            type="checkbox" 
                            id={i.id}
                            name="scales" 
                            checked = {i.checked}
                            onChange={(e)=>{
                                let s = structuredClone(filter)
                                s[i.id].checked = !s[i.id].checked
                                setFilters(s)

                            }}
                        />
                        <label htmlFor="scales">{i.description}</label>
                    </div>                   
                )
            })}          
        </div>
    );
};

export default Filter;

