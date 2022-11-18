import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SecurityPolicy from './components/securityPolicy/SecurityPolicy';
import arrow_up from './arrow_up_fonless.png'
import PayModal from './payModal/PayModal';
import UserAgreement from './components/UserAgreement'
import cl from './Pay.module.css'
import Confidentiality from './components/Confidentiality';
import CommonActionButton from '../../components/common/CommonActionButton';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Pay = () => {

    const [konf, setKonf] = useState(false)
    const [pers, setPers] = useState(false)

    const [custSum, setCustomSumm] = useState(0)
   
    let modalkonf = <PayModal action={setKonf} data={konf}><Confidentiality/></PayModal>
    let modalpers = <PayModal action={setPers} data={pers}><UserAgreement/></PayModal>

    let modal = konf ? modalkonf : pers ? modalpers : ''   
    
    let cart = useContext(ThemeContext)
    console.log(cart)
    
    return (
        <div className={cl.wrapper}>
            {modal}
            <div className={cl.payBlock__title}>
                <h2> Оплатить блок занятий</h2> 
            </div>
                
            <div className={cl.payBlock__buttons}>
                <div className={cl.payBlock__buttons_title}> <h3>Блок:</h3> </div>
                <CommonActionButton 
                    className = {cl.payBlock__oneButton}
                    data = {cart.data+1600}
                    setData = {cart.setData} 
                >1 занятие 1600р</CommonActionButton>
                <CommonActionButton 
                    data = {cart.data+6000}
                    setData = {cart.setData} 
                >4 занятие 6000р</CommonActionButton>
                <CommonActionButton 
                    data = {cart.data+11200}
                    setData = {cart.setData} 
                >8 занятие 11200р</CommonActionButton>
            </div>
              
            <div style={{marginTop:'30px'}}>Или</div>

            <div className={cl.payBlock__custom}> 
                <div className={cl.payBlock__custom_title}>
                    <h2>Произвольная сумма:</h2>
                </div>
                <div>
                    <input 
                        value={custSum} 
                        onChange={e=>setCustomSumm(Number(e.target.value))} 
                    />
                </div> 
                <button onClick={()=>{cart.setData(cart.data+custSum)}}>Добавить {custSum}</button>
            </div>
            <div className={cl.payBlock__politics}>
                    <button onClick={()=>setKonf(!konf)}>Конфиденциальности</button>
                    <button onClick={()=>setPers(!pers)}>Обработки персональных данных</button>
            </div>
            
            <SecurityPolicy/>
        </div>
    );
};

export default Pay;