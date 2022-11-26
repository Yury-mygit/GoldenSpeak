import React from 'react';
import cl from './BlockBenefits.module.scss'

const BlockBenefits = ({data}) => {

    console.log(data)

    return (
        <div className={cl.wrapper}>
            <h2> Почему выбирают нас? </h2>
            <div className={cl.motto}>{data.motto}</div>

            <div className={cl.block}>
                <div className={cl.block__imgWrapper}> 
                    <img src={data.layers[0].url}/> 
                </div>
                <div> 
                    <h4> {data.layers[0].title} </h4>
                    <p> {data.layers[0].motto} </p>
                </div>
            </div>
            
        </div>
    );
};

export default BlockBenefits;