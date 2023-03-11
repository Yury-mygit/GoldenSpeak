import React from 'react';
import cl from './Counter.module.scss'

const Counter = ({сount, setCount, options=[], ExternCL = 'undefined'}) => {
    // console.log(ExternCL)
    return (
        <select 
            value={сount} 
            onChange={(e)=>setCount(e.target.value)}
            className={ExternCL==='undefined' ? cl.wrapper : ExternCL}
            
        >                  
            {options.map((i, ind)=>{
            return <option value={i} key = {ind}> {i} </option>
            })}
        </select>
    );
};

export default Counter;