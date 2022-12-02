import React, { useEffect, useState } from 'react';
import ConditionalRender from '../../components/conditionsRender/ConditionalRender';
import cl from './Home.module.css'

import {useGetPageDataQuery} from '../../API/pageAPI'

const Home = ({pageData, children}) => {

    // console.log(pageData[0].id)

return (
    <div className={cl.wrapper}>             
            {pageData.map(block=>{
                
                return <ConditionalRender 
                            key={block.id} 
                            type={block.type} 
                            data={block.data}
                        />
                // return <div>sdsds</div>
                        
            })}                     
    </div>
); 
       
};

export default Home;