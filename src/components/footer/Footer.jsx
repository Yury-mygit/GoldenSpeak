import React from 'react';
import SecurityPolicy from './components/SecurityPolicy';
import arrow_up from './arrow_up_fonless.png'


const Footer = () => {
    return (
        <div style={{...st_wrapper}}>
            <div style={{display:'flex', justifyContent:'space-between', padding:'10px 0 0 0'}}>
                © Golden speak 2022 
                <button 
                    onClick={() => {window.scrollTo(0, 0)}}
                    style={{color:'white', backgroundColor:'black', display:'flex'}}
                >
                    <p  style={{marginTop: '5px'}}> Наверх </p>
                    <img 
                    src={arrow_up}
                    style={{width:"20px"}}
                    />
                </button>
            </div>
            
            <SecurityPolicy/>
        </div>
    );
};

export default Footer;


const st_wrapper = {
    minHeight:'100px',
    backgroundColor: 'black',
    color: 'white',
    padding: '0px 100px 0px 100px',
}