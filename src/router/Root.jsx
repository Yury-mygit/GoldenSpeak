import React from 'react';



import { Outlet, useLocation} from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Modal from '../components/header/components/modal/Modal';
import Home from '../pages/home/Home';
import cl from './Root.module.css'
import { ThemeContext } from '../App';
import { useContext } from 'react';
import { useGetPageDataQuery } from '../API/pageAPI';
import LoadingPage from '../pages/loadingPage/LoadingPage';
import ErrorPage from '../pages/errorPage/ErrorPage';

const Root = ({}) => {

    let location = useLocation()
    let theme = useContext(ThemeContext)

    const 
    { 
        data, 
        isError, 
        isLoading, 
        isFetching 
    } = useGetPageDataQuery (10001)
   
    let inner =<LoadingPage/>
    
    if (!isLoading){
        inner= <Home pageData={Object.values(data[0].content)}/>       
    } 
   
    if (isError) inner = <ErrorPage/>

    let modalWindow = <Modal/>
   
    
    if (location.pathname != '/')  inner = <Outlet/>
    if (theme.modal == false) modalWindow = ''

    return (
        
        <div className={cl.wrapper}>
             
                <Header/>
                <Cart/>
                {modalWindow}
                {inner}
                
                <Footer/>  
               

        </div>

       
        
    )   
   
};

export default Root;


const styleBlock__wrapper = {
    height: '100px', 
}

