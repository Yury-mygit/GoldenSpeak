import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';


const Pay = () => {
    return (
        <>
        <Header/>
        <div style = {{
                            height:'500px',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                <h2> Задания </h2>
                <div> В разработке</div>
            </div>
       
        <Footer/>
        </>
    );
};

export default Pay;