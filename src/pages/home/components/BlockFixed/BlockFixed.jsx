import React from 'react';

const BlockFixed = ({id, pic_2}) => {
    // console.log(id)
    return (
        <div 
            key = {id} 
            style={{backgroundImage: `url(${pic_2})`, ...styles.wrapper}}                                       
         >   
            <div style = {{...styles.titleBlock}}>
                <h1 style ={{...styles.title}}> 
                    
                    <p style = {{color: 'rgb(216, 138, 13)',}}>Golden speak</p> 
                    <p>Логопед на дом! Москва. </p>
                    
                </h1>

                <div style={{...styles.moto}}> 
                    Устраняем недостатки в речи. Быстро и качественно!
                </div>
            </div> 
                                            
        </div>
        
    );
};


const styles = {
    wrapper:{ 
        height:'568px',
        width: '100%',
        backgroundSize: "cover",
        backgroundSize: "100% auto",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "50% 50%",
        backgroundAttachment: 'fixed',
        padding:'10px 10px 10px 10px',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    titleBlock:{
        paddingTop:'100px',
    },
    title: {
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        fontWeight:'600',
        fontSize:'60px',
        marginBottom:'80px',
    },
    moto:{
        fontSize:'35px'
    }
    
}

export default  BlockFixed;