import React from 'react';
import cl from './PageRender.module.scss'
import { useNavigate,useLocation } from "react-router-dom";
import ConditionalRender from './conditionsRender/ConditionalRender';


const PageRender = ({data}) => {
    
    
    let location = useLocation();
    // console.log(data)
     

    return (
        <div className={cl.wrapper}>
            {data.structural_blocks.map((value, index, array) => {
                return(
                <ConditionalRender 
                    type = {value.type}
                    data = {value.data}
                    key  = {value.id}
                />  
              
                )
                
            })}
        </div>
       
    );
};

export default PageRender;