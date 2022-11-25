import React, { useState } from 'react';
import ConditionalRender from './ConditionalRender';
import cl from './Home.module.css'
import state from './State';

const Home = () => {

    const [blocks, setBlocks] = useState([...state ])

    return (
        <div className={cl.wrapper}>             
                {blocks.map(block=>{
                    return <ConditionalRender 
                                key={block.id} 
                                type={block.type} 
                                data={block.data}
                            />
                })}                     
        </div>
    );   
};

export default Home;