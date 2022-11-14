import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import pic_2 from './pics/pic_2.jpg'

const  blocks = [
    {id: 1, name: 'block 1'},
    {id: 2, name: 'block 2'},
    {id: 3, name: 'block 3'},
    {id: 4, name: 'block 4'},
    {id: 5, name: 'block 4'},
    {id: 6, name: 'block 4'},
    {id: 7, name: 'block 4'},
    {id: 8, name: 'block 4'},

]

const Home = () => {
    return (
        <div style={{minHeight: '100vh' }}>
            <Header/>
            <div style={{minHeight: '500px', display:'flex', flexDirection:'column' }}> 
                {
                    blocks.map( (block) => {
                        return <div 
                                    key = {block.id} 
                                    style={{
                                        border:'1px solid black', 
                                        // height:'768px',
                                        width: '100%',
                                        backgroundImage: `url(${pic_2})`,
                                        backgroundSize: "cover",
                                        backgroundSize: "auto 90%",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: "50% 50%",
                                    }}
                                    
                                >   
                                    <div style={{ height:'900px'}}>
                                        block {block.id}
                                    </div>
                                    
                                </div>
                    })
                }
            </div>
           
            <Footer/>
        </div>
    );
};

export default Home;


const styleBlock__wrapper = {
    height: '100px', 
}