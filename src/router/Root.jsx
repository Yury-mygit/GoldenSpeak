import React from 'react';



import { Outlet, useLocation} from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../pages/home/Home';


import cl from './Root.module.css'



const Root = () => {



    let location = useLocation()

    let inner = <Home/>

    if (location.pathname != '/')  inner = <Outlet/>

    return (
        
        <div className={cl.wrapper}>
             
                <Header/>
                <Cart/>
                {inner}
                <Footer/>  
            

        </div>

       
        
    )   
   
};

export default Root;


const styleBlock__wrapper = {
    height: '100px', 
}

