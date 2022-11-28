import React from 'react';

const BlockCard = ({cl, data}) => {
    return (
        <div className={cl.blockCard}>
            <div className={cl.block__imgWrapper}> 
                    <img src={data.url}/>
            </div>
            <h3> 
                Разовое занятие 
            </h3> 
            
            <div> 
                Стоимость разового занятия, в том числе первичной логопедической диагностики, составляет 1.600 рублей.
            </div>
        </div>
    );
};

export default BlockCard;