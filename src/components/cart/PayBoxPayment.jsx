import React from 'react';
import { useState } from 'react';
import merchant from './PayBoxWidget'

const merch = new merchant();

const PayBoxPayment = () => {

  const [amount, setPayAmount] = useState(4);

    return (
        <div>
            <hr style={{width:'100%',height:'2px',color:"black",backgroundColor:"black"}}/>
            <h2 style={{ fontSize: '20px', marginBottom:'10px'  }}> 1. Тест платежного виджета PayBox   </h2>
            <div style={{marginBottom:'10px'}}>
                <input 
                    value={amount}
                    onChange={(e)=>setPayAmount(e.target.value)}
                > 
                  
                </input>

                  <button onClick={()=>{ merch.initPayment(
                    amount,
                    { 
                      order:100, 
                      language:'ru',
                      currency:'RUB', 
                      description:'Description из клиента',
                      // receipt_positions: [
                      //     {
                      //       count: 2,
                      //       name: "Коврик для мыши",
                      //       tax_type: 3,
                      //       price: 1000
                      //     },
                      //     {
                      //       count: 2,
                      //       name: "Розетка",
                      //       tax_type: 3,
                      //       price: 1000
                      //     }
                      //   ],        
                      // custom_params: {
                      //     parametr1:'2323',
                      //     parametr2:'2323',
                      //     parametr3:'2323',
                      //     parametr4:'2323'
                      // },         

                    }
                    )}} >Оплатить!  </button>
                  <button onClick={()=>{merch.tech_ShowMerch()}} >Оплатить!  </button>
            </div>
                <hr style={{width:'100%',height:'2px',color:"black",backgroundColor:"black", margin:'00px 0px 0px 0px'}}/>
                      
        </div>

        
    );
};

export default PayBoxPayment;