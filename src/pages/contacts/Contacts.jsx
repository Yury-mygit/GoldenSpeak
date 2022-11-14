import React from 'react';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';



const Contacts = () => {
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
                <h2> Контакты </h2>
                <div> В разработке</div>
            </div>  
            <Footer/>
        </div>
    );
};

export default Contacts;