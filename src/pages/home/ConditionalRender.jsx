import React from 'react';

import BlockFixed from './components/BlockFixed/BlockFixed';
import BlockFotoText from './components/BlockFotoText/BlockFotoText';
import BlockBenefits from './components/BlockBenefits/BlockBenefits';
import BlockCosts from './components/BlockCosts/BlockCosts';
import BlockReviews from './components/BlockReviews/BlockReviews';


const ConditionalRender = ({type, data}) => {

 let block

 switch (type) {
    case 'face': block = <BlockFixed  data={data}/>; break;
    case 'content': block = <BlockFotoText   data={data}/>; break;
    case 'benefit': block = <BlockBenefits data={data}/>; break;
    case 'costs': block = <BlockCosts />; break;
    case 'rewiews': block = <BlockReviews />; break;
    
   
    default: block = <div></div>
}

  
// console.log(block)

    return (
        
        block
        
    );
};

export default ConditionalRender;