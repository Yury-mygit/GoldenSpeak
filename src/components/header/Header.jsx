import React from 'react';

import FirstLine from './components/FirstLine';
import SecondLine from './components/SecondLine';

import cl from './Header.module.css'


const Header = () => {
    return (
        <div className = {cl.wrapper}> 
            <FirstLine/>
            <hr
              style={{
                color: 'black',
                //  backgroundColor: 'black',
                 height: "0,5px",
             }}
            />   
              
            <SecondLine/>
        </div>
    );
};

export default Header;


const st_header = {

    padding:'20px 30px 0px 30px',
    
    
    
}