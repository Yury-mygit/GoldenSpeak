import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment} from '../../store/counterSlice'

// import {} from './'
import {useGetAllPostsQuery} from '../../API/postsAPI'
import {useGetPageDataQuery} from '../../API/pageAPI'
import {useGetAllUsersQuery} from '../../API/usersAPI'

import cl from './style/News.module.css'

const News = () => {

    const [newsCount, setNewsCount] = useState(10)

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    console.log(count)

    const { data: news, error, isLoading } = useGetAllPostsQuery ({start: 0, limit: newsCount})
    const { data: users, usersError, usersIsLoading } = useGetAllUsersQuery ({start: 0, limit: newsCount})
    const { data: pageData, errorPageData, isLoadingPageData } = useGetPageDataQuery ({}) 
    
    // const [page, setPage] = useState('sdsdsd')
    // const [news, setNews] = useState([])
    // const [usersData, setUsersData] = useState([])

    // useEffect(()=>{

    //     setNews(posts)
    //     setPage(pageData)
    //     setUsersData(users)
        
    // },[posts,pageData,users])

    console.log(pageData  )

   
    let inner = ''

    if (news && news.length) inner = news.map((item, index)=>{
        return (
            <div 
                key={index} 
                className={cl.news_wrapper}
            > 
                <div className={cl.news__title_content}>
                    <p>title:</p>
                    <h3 className={cl.news__title_text}>  
                        {item.title} 
                    </h3>
                    
                </div>
                <div className={cl.news__body}>           
                       {item.body}               
                </div>
            </div>
        )
    })


    return (  
        <div className={cl.wrapper} >
            <h2> Новости </h2>
            <div className={cl.news_menu} > 
                меню 
                <select value={newsCount} onChange={(e)=>setNewsCount(e.target.value)}>
                    <option value={5}> 5 </option>
                    <option value={10}> 10 </option>
                    <option value={20}> 20 </option>
                    <option value={40}> 40 </option>
                </select>
                {/* <button onClick={()=>setPage("dsd")}>статус</button> */}
            </div>
            {inner}
        </div>     
    );
};

export default News;