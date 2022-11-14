import React from 'react';
import cl from "./Header.module.css"

import FirstLine from './components/FirstLine';
import SecondLine from './components/SecondLine';

const Header = () => {
    let id = 1
    return (
        <div style={{...st_header}}> 
            <FirstLine/>
            <SecondLine/>
        </div>
    );
};

export default Header;


const st_header = {
    backgroundColor: 'white',
    
}