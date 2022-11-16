import React from 'react';
import arrow_up from './arrow_up_fonless.png'
import cl from './Footer.module.css'


const Footer = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                © Golden speak 2022 
                <button 
                    onClick={() => {window.scrollTo(0, 0)}}
                    className={cl.scrollButton}
                >
                    <p  style={{marginTop: '5px'}}> Наверх </p>
                    <img 
                    src={arrow_up}
                    style={{width:"20px"}}
                    />
                </button>
            </div>
            
            
        </div>
    );
};

export default Footer;


const st_wrapper = {
    minHeight:'200px',
    backgroundColor: 'black',
    color: 'white',
    padding: '0px 100px 0px 100px',
}