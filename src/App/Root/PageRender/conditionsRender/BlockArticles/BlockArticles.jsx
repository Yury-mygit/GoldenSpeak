import React from 'react';
import { useState } from 'react';

import Menu from '../BlockNews/Menu/Menu';
import cl from './BlockArticles.module.scss'

const BlockArticles = () => {

    let articlesCountOptions = [5,10,20,40]
    
    const [articlesCount, setArticlessCount] = useState(articlesCountOptions[0]) 
    // const { data = [], isError, isLoading, isFetching } = useGetNewsQuery(newsCount,0)
    // const [addPost, { isLoading2 }] = useAddNewsMutation()

    // if (isError) return <div>An error has occurred!</div>
    // if (isLoading) return <div>Загрузка..</div>



    return (
        <div className={cl.wrapper}>
            
            <h2> Статьи </h2>

            {/* <Menu 
                articlesCount = {articlesCount}
                setArticlessCount = {setArticlessCount}
                articlesCountOptions = {articlesCountOptions}
            /> */}


        </div>
    );
};

export default BlockArticles;