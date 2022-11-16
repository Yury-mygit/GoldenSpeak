import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import StButton from '../../components/common/StButton';
import cl from './About.module.css'

const About = () => {
    return (
        <div  className={cl.wrapper}>            
           
                <div style={{minHeight: '500px', width:'900px', display:'flex', flexDirection:'column', alignItems:'center' }}> 
                    <h2 className={cl.title_Golden}>
                        Golden Speak - это служба надомной логопедической помощи. 
                    </h2>
                    <hr
                        style={{
                            background: 'black',
                            color: 'black',
                            borderColor: 'black',
                            height: '1px',
                            width: '200px',
                            marginBottom: '50px',
                        }}
                    />
                    <p
                    style={{
                        marginBottom: '50px',
                        fontSize:'20px',
                        textAlign: 'justify'
                    }}
                    >
                         Мы предоставляем широкий спектр логопедических услуг, выполняемых специалистами на дому у клиента. Мы экономим ваше время и гарантируем высокое качество выполнения услуг. Успешно работаем как с детьми, так и со взрослыми.
                    </p>

                    <StButton text={'Главная'} link = {'/'}/>
                </div>
            </div>
         
    );
};

export default About;

