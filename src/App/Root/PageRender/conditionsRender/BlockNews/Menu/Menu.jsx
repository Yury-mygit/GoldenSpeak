import React from 'react';
import cl from './Menu.module.scss'
import Counter from '../../../../../../Componnts/Counters/Counter';
import StButton from '../../../../../../Componnts/Buttons/StButton';
import MenyType1 from '../../../../../../Componnts/MenuType1/MenyType1';
import Filter from '../../../../../../Componnts/FilterComponent/Filter';

const Menu = ({outputCount, setOutputCount, outputCountOptions}) => {
    return (

        <MenyType1
            styleClass = {cl.news_menu}
        >
            <Counter
                сount       = {outputCount}
                setCount    = {setOutputCount}
                options     = {outputCountOptions}
                styleClass  = {cl.counter}
            />
            {/* <StButton text = 'sdsd' action = {()=>console.log('test')} /> */}
            <Filter />
        </MenyType1>
    );
};

export default Menu;