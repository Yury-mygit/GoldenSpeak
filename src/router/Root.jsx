import React from 'react';



import { Outlet, useLocation} from 'react-router-dom';
import Cart from '../components/cart/Cart';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Modal from '../components/Modal';
import Home from '../pages/home/Home';
import cl from './Root.module.css'
import { ThemeContext } from '../App';
import { useContext } from 'react';

const Root = () => {

    let location = useLocation()
    let theme = useContext(ThemeContext)

    let inner = <Home/>
    let modalWindow = <Modal></Modal>

    console.log(theme)

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

