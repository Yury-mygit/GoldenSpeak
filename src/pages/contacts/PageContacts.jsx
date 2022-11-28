import React, { useState } from 'react';
import ConditionalRender from '../../components/conditionsRender/ConditionalRender';
import cl from './Contacts.module.scss'
import contactsState from '../../store/ContactState';

const Contacts = () => {

    const [blocks, setBlocks] = useState([...contactsState])

    return (
        <div className={cl.wrapper}>
      
                {blocks.map(block=>{
                    return <ConditionalRender 
                                key={block.id || 1} 
                                type={block.type} 
                                data={block.data}
                            />
                })} 
       
       
        </div>
    );
};

export default Contacts;