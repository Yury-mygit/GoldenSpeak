import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useState, useEffect } from 'react';

import cl from './style/News.module.css'

const News = () => {

    const [news, setNews] = useState([])

    useEffect(()=>{

        let url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15';

        const fetchData = async() => {
            let response = await fetch(url);  
    
            if (response.ok) { // если HTTP-статус в диапазоне 200-299
              // получаем тело ответа (см. про этот метод ниже)
              let json = await response.json();
              // выводим данные в консоль
            //   console.log(json)
              setNews(json)
            } else {
              alert("Ошибка HTTP: " + response.status);
            }
        }
        fetchData();
        
    },[])



    console.log('news = ',typeof(news), news)



    let inner = ''

    if (news.length) inner = news.map((item, index)=>{
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
        <div className={cl.wrapper}>
            <h2> Новости </h2>
            <div className={cl.news_menu} > меню </div>
            {inner}
        </div>     
    );
};

export default News;