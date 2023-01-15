import React from 'react';

import BlockFixed       from      './BlockFixed/BlockFixed';
import BlockFotoText    from      './BlockFotoText/BlockFotoText';
import BlockBenefits    from      './BlockBenefits/BlockBenefits';
import BlockCosts       from      './BlockCosts/BlockCosts';
import BlockReviews     from      './BlockReviews/BlockReviews';
import Contacts         from      './blockContacts/Contacts';
import BlockTask        from      './BlockTask/BlockTask';
import BlockAbout       from      './BlockAbout/BlockAbout';
import BlockNews        from      './BlockNews/BlockNews';
import BlockPay         from      './BlockPay/BlockPay';
import BlockPayShop     from      './BlockPay/BlockPayShop';
import BlockArticles    from      './BlockArticles/BlockArticles';

const ConditionalRender = ({type, data}) => {

    let block

    switch (type) {
        case 'about':     block = <BlockAbout  data={data} />; break;
        case 'face':      block = <BlockFixed  data={data}/>; break;
        case 'content':   block = <BlockFotoText   data={data}/>; break;
        case 'benefit':   block = <BlockBenefits data={data}/>; break;
        case 'costs':     block = <BlockCosts data={data}/>; break;
        case 'rewiews':   block = <BlockReviews data={data}/>; break;
        case 'taskslist': block = <BlockTask data={data}/>; break;
        case 'articles':  block = <BlockArticles data={data}/>; break;
        case 'pay':       block = <BlockPay data={data}/>; break;
        case 'payshop':   block = <BlockPayShop data={data}/>; break;
        case 'news':      block = <BlockNews data={data}/>; break;
        case 'contacts':  block = <Contacts data={data} />; break;
    
        default: block = <div></div>
    }

    return (       
        block
    );
};

export default ConditionalRender;