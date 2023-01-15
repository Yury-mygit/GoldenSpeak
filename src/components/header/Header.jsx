import React from 'react';
import { ThemeContext } from '../../App'
import FirstLine from './components/FirstLine';
import SecondLine from './components/SecondLine';
import { useGetPageDataQuery } from '../../API/pageAPI';
import { Link } from 'react-router-dom';

import cl from './Header.module.css'


const Header = () => {


    const { data, isError, isLoading, isFetching } = useGetPageDataQuery (10001)


    if (isLoading) return ''

    console.log(data)

    let arr = data.slice().sort((a,b)=>{
        if (a.seq>b.seq) return 1
        return -1
    })

    console.log(arr)
    let a =arr.map(i=>
                    
        <Link 
            to={i.path}  
            key={i.id}  
            className={cl.item}
        > {i.title} </Link>)


    return (
        <div className = {cl.wrapper}> 
            {/* <div>
                sds
            </div> */}
            {  a   }
                
        </div>
    );
};

export default Header;

