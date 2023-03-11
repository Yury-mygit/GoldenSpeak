import React, { useState } from 'react';
import Menu from './Menu/Menu';
import cl from './BlockNews.module.scss'
import { useGetNewsQuery, useAddNewsMutation } from '../../../../../API/newsAPI';
import NewsList from './NewsList/NewsList';
import Controls from './Controls/Controls';


const BlockNews = () => {

    let newsCountOptions = [5,10,20,40]
    
    const [newsCount, setNewsCount] = useState(newsCountOptions[0]) 
    const { data = [], isError, isLoading, isFetching } = useGetNewsQuery(newsCount,0)
    const [addPost, { isLoading2 }] = useAddNewsMutation()

    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <div>Загрузка..</div>

    // console.log(data)

    

    return (  
        <div className={cl.wrapper} >

            <h2> Новости </h2>
{/* 
            <Menu 
                newsCount = {newsCount}
                setNewsCount = {setNewsCount}
                newsCountOptions = {newsCountOptions}
            /> */}
              

            <NewsList  
                data = {data.data} 
            />

            <Controls />
            
        </div>     
    );
};

export default BlockNews;