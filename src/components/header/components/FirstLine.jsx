import React, { useState } from 'react';
import ActionButton from '../../common/ActionButton';

import cl from './FirstLine.module.css'

import logo from './Logo.png'

const FirstLine = () => {

    const [buttonOn, serbuttonOn] = useState(false)

    return (
        <div className={cl.firstLine_wrapper} > 
            <div style={{...styles.st_item}}>
                <img 
                    src={logo}
                    style={{
                        width:'50px',
                    }}
                />
            </div>


            <div style={{display:'flex', justifyContent:'center',...styles.st_item}}>
                <div style={{
                    
                    position:'relative',
                    top:'10px'
                }}
                >© Golden speak 2022</div> 
            </div>


            <div style={{display:'flex',...styles.st_item}}>
                <div style={{
                    paddingRight:'70px',
                    position:'relative',
                    left:'-160px',
                    top:'10px'
                }}><div style={{position:'absolute',width:'250px'}}> Whats upp: tel:+7 985-888-63-31</div></div>
                
                <div>
                    <ActionButton text={'Заказать звонок'} setAction={(data)=>console.log(data)}/>
                </div>    
            </div>

            
        </div> 
    );
};

export default FirstLine;


const styles = {
    component : {
        height: '50px',
        display: 'flex',
        justifyContent: "space-between"
    },
    st_item : {
        
        width:"200px",
        // border:'1px solid black'
    }
}
