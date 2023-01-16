import React from 'react';
import NewsItem from './NewsItem/NewsItem';

import cl from './NewsList.module.scss'

const NewsList = ({data}) => {
    return(
        <div className={cl.listWrpper}>

            {/* {data.map(i=> <NewsItemWrapper  key={i.id}  data={i}  />)}  */}
            {data.map(i=> <NewsItem  key={i.id}  data={i}  />)} 

        </div>
    )             
};

export default NewsList;



