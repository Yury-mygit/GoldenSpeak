import React from 'react';

import BlockFixed from './components/BlockFixed/BlockFixed';
import BlockFotoText from './components/BlockFotoText/BlockFotoText';
import BlockBenefits from './components/BlockBenefits/BlockBenefits';
import BlockCosts from './components/BlockCosts/BlockCosts';
import BlockReviews from './components/BlockReviews/BlockReviews';


const ConditionalRender = ({type, data}) => {

 let block

 switch (type) {
    case 'face': block = <BlockFixed key={1} data={data}/>; break;
    case 'content': block = <BlockFotoText key={2}  pic_2={data.fon}/>; break;
    case 'benefit': block = <BlockBenefits key={3}/>; break;
    case 'costs': block = <BlockCosts key={4}/>; break;
    case 'rewiews': block = <BlockReviews key={5}/>; break;
    
   
    default: block = <div></div>
}

  
// console.log(block)

    return (
        
        block
        
    );
};

export default ConditionalRender;