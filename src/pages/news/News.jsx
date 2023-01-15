import React, { useState} from 'react';

import { useSelector, useDispatch } from 'react-redux'
import ConditionalRender from '../../'
import {useGetAllPostsQuery} from '../../API/postsAPI'
import {useGetPageDataQuery} from '../../API/pageAPI'
import {useGetAllUsersQuery} from '../../API/usersAPI'

import cl from './style/News.module.css'

const News = () => {

   return ( <div> новости </div>)
    // // const { data: users, usersError, usersIsLoading } = useGetAllUsersQuery ({start: 0, limit: newsCount})
    
    // const { data, isError, isLoading, isFetching } = useGetPageDataQuery (10001)


    // if (!isLoading){
    //     return (
    //         <div className={cl.wrapper}>             
    //                 {Object.values(data[0].content).map(block=>{
                        
    //                     return <ConditionalRender 
    //                                 key={block.id} 
    //                                 type={block.type} 
    //                                 data={block.data}
    //                             />
                        
                                
    //                 })}                     
    //         </div>
    //     ); 
    // }
   

};

export default News;