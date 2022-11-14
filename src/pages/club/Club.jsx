import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';


const Club = () => {
    return (
        <div>
             <Header/>
            <div style = {{
                            height:'500px',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                <h2> Клуб </h2>
                <div> В разработке</div>
            </div>  
            <Footer/>
        </div>
    );
};

export default Club;