import React from 'react';
import { Link } from 'react-router-dom';

const ActionButton = ({text, action, setAction}) => {
    return (
        <button  
            style={{...links}}
            onClick={()=>setAction(!action)}
        > 
            {text} 
        </button>
    );
};

export default ActionButton;

const links = {
    
    textDecoration: 'none',
    fontWeight: '700',
    color:'white',
    fontSize:'15px',
    height: '35px',
    width:'150px',
    borderRadius: '17px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center', 
    backgroundColor: 'rgba(216, 138, 13, 1)',
    
}