import React from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Modal from './Modal/Modal';

import cl from './Root.module.css'
import { ThemeContext } from '../App';
import { useContext } from 'react';
import { useGetPageDataQuery } from '../../API/pageAPI';
import LoadingPage from '../../pages/loadingPage/LoadingPage';
import ErrorPage from '../../pages/errorPage/ErrorPage';

const Root = ({}) => {

    let location = useLocation()
    let theme = useContext(ThemeContext)

    // const {data,isError,isLoading,isFetching} = useGetPageDataQuery ()
   
    
    // if (isLoading) return <LoadingPage/>
    // if (isError)   return (<div> Произошла ошибка, пожалуйста, попробуйте позднее </div>)
   
    return (        
        <div className={cl.wrapper}>            
                <Header/>
                <Cart/>
                <Modal
                    show = {theme.modal}
                />
                <Outlet/>               
                <Footer/>  
        </div>        
    )  

   
};

export default Root;


