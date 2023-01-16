import React from 'react';
import { ThemeContext } from '../../App/App'
import FirstLine from './components/FirstLine';
import SecondLine from './components/SecondLine';
import { useGetPageDataQuery } from '../../API/pageAPI';
import { Link } from 'react-router-dom';
import settings from '../../general/settings';
import logo from '../../general/Logo.png';
import cl from './Header.module.scss'
import Midle from './Midle/Midle';
import Right from './Right/Right';
import Left from './Left/Left';


const Header = () => {


    const { data, isError, isLoading, isFetching } = useGetPageDataQuery (10001)

    console.log(data)

    if (isLoading) return ''

    let sortedData = data.slice().sort((a,b)=>{
        if (a.seq>b.seq) return 1
        return -1
    })

   

    let unauthorizedMenuItems = sortedData.filter(item=>item.user_right==100)
    // .map(i=>
                    
        // <Link 
        //     to={i.path}  
        //     key={i.id}  
        //     className={cl.item}
        // > {i.title} </Link>)

    // ===============

    let authorizedMenuItems = sortedData.filter(item=>item.user_right==200)
    // .map(i=>
                    
    //     <Link 
    //         to={i.path}  
    //         key={i.id}  
    //         className={cl.item}
    //     > {i.title} </Link>)



    return (
        <div className = {cl.wrapper}>

            <div className={cl.plase_Left}>
                <Left unauthorizedMenuItems={unauthorizedMenuItems} logo={logo} />
            </div>
           
            <Midle/>

            <div className={cl.plase_Right}>
                <Right authorizedMenuItems={authorizedMenuItems}/>
            </div>
           
        </div>
    );
};

export default Header;

