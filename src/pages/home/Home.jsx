import React, { useEffect, useState } from 'react';
import ConditionalRender from '../../components/pageRender/conditionsRender/ConditionalRender';
import cl from './Home.module.css'
import { useGetPageDataQuery } from '../../API/pageAPI';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../store/counterSlice';

const Home = () => {
    // const { data: news, error, isLoading: isNewsLoading } = useGetAllPostsQuery ({start: 0, limit: newsCount})
    
    
    const [newsCount, setNewsCount] = useState(10)

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const { data, isError, isLoading, isFetching } = useGetPageDataQuery (10001)

    if (isLoading) return (<div>ЗАГРУЗКА</div>)

    

   
     
        return (
            <div className={cl.wrapper}>  

        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >инкремент</button>

        <span>{count}</span>


                    {/* {Object.values(data[0].content).map(block=>{
                        
                        return <ConditionalRender 
                                    key={block.id} 
                                    type={block.type} 
                                    data={block.data}
                                />
                        
                                
                    })}                      */}
            </div>
        ); 
 
    


       
};

export default Home;