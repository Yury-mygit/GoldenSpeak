import React from 'react';
import BlockFixed from './components/BlockFixed/BlockFixed';
import BlockFotoText from './components/BlockFotoText/BlockFotoText';

import cl from './Home.module.css'

import fon_block_1 from './pics/fon_block_1.jpeg'
import pic_2 from './pics/pic_2.jpg'
import pic_3 from './pics/pic_3.jpg'
import pic_4 from './pics/pic_4.jpg'
import pic_5 from './pics/pic_5.jpg'

let a = 1;

let aa ="StructuralBlock"

let structuralBlockFixed1 = <BlockFixed key={1} id={1} pic_2={fon_block_1}/>
let StructuralBlockLeftRight2 = <BlockFotoText key={2} id={2} pic_2={pic_3}/>
let StructuralBlockLeftRight3 = <BlockFotoText key={3} id={3} pic_2={pic_4}/>
let StructuralBlockLeftRight4 = <BlockFotoText key={4} id={4} pic_2={pic_5}/>
// let structuralBlockFixed4 = <StructuralBlockFixed key={4} id={a} pic_2={pic_2}/>

const  blocks = [
    structuralBlockFixed1,
    StructuralBlockLeftRight2,
    StructuralBlockLeftRight3,
    StructuralBlockLeftRight4,
    // structuralBlockFixed4,
    
    
]



const Home = () => {
    return (
        <div className={cl.wrapper}>             
            <div style={{minHeight: '500px', display:'flex', flexDirection:'column' }}>   
                {/* <StructuralBlock id={1} pic_2={pic_2}/> */}
                {/* {blocks[0].component} */}
                {/* {structuralBlock} */}
                {blocks.map(block=>block)}
            </div>             
        </div>
    );   
};

export default Home;


const styleBlock__wrapper = {
    height: '100px', 
}