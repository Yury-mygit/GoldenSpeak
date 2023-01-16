import React from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Modal from '../components/header/components/modal/Modal';

import cl from './Root.module.css'
import { ThemeContext } from '../App/App';
import { useContext } from 'react';
import { useGetPageDataQuery } from '../API/pageAPI';
import LoadingPage from '../pages/loadingPage/LoadingPage';
import ErrorPage from '../pages/errorPage/ErrorPage';

const Root = ({}) => {

    let location = useLocation()
    let theme = useContext(ThemeContext)

    const {data,isError,isLoading,isFetching} = useGetPageDataQuery (10001)
   
    if (isLoading) return <LoadingPage/>
    if (isError)   return (<div> Произошла ошибка, пожалуйста, попробуйте позднее </div>)
   
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


