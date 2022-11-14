import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const About = () => {
    return (
        <div>
            <Header/>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div style={{minHeight: '500px', width:'900px', display:'flex', flexDirection:'column', alignItems:'center' }}> 
                    <h2 style={{
                        marginTop: '70px',
                        marginBottom: '70px', 
                        fontSize:'50px',
                    }}> 
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

                    <Link to={'/'}  style={{...links}}> Главная </Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;

const links = {
    margin: '10px',
    textDecoration: 'none',
    fontWeight: '700',
    color:'white',
    fontSize:'20px',
    height: '50px',
    width:'200px',
    borderRadius: '25px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center', 
    backgroundColor: 'rgba(216, 138, 13, 1)',
    marginBottom:'100px'
}