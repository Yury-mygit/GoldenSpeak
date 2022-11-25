import React from 'react';
import BlockFixed from './components/BlockFixed/BlockFixed';
import BlockFotoText from './components/BlockFotoText/BlockFotoText';
import BlockBenefits from './components/BlockBenefits/BlockBenefits';
import BlockCosts from './components/BlockCosts/BlockCosts';
import BlockReviews from './components/BlockReviews/BlockReviews';

import cl from './Home.module.css'

import fon_block_1 from './pics/fon_block_1.jpeg'
import pic_2 from './pics/pic_2.jpg'
import pic_3 from './pics/pic_3.jpg'
import pic_4 from './pics/pic_4.jpg'
import pic_5 from './pics/pic_5.jpg'



let blockFixed = <BlockFixed key={1} id={1} pic_2={fon_block_1}/>
let blockLeftRight = <BlockFotoText key={2} id={2} pic_2={pic_3}/>
let blockBenefits = <BlockBenefits key={3}/>
let blockCosts = <BlockCosts key={4}/>
let blockReviews = <BlockReviews key={5}/>

// let structuralBlockFixed4 = <StructuralBlockFixed key={4} id={a} pic_2={pic_2}/>

const  blocks = [
    blockFixed,
    blockLeftRight,
    blockBenefits,
    blockCosts,
    blockReviews,
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