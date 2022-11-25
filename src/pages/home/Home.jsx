import React from 'react';
import { generate } from '../../Utils/blockListGenerator';
import cl from './Home.module.css'

let blocks = generate()

const Home = () => {
    return (
        <div className={cl.wrapper}>             
            <div style={{minHeight: '500px', display:'flex', flexDirection:'column' }}>   
                {blocks.map(block=>block)}
            </div>             
        </div>
    );   
};

export default Home;