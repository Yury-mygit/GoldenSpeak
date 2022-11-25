import React from 'react';
import StButton from '../../../../components/common/StButton';
import cl from './BlockFotoText.module.scss'

function BlockFotoText({pic_2,id}) {
    return (
        <div className={cl.wrapper}>

            <h2>Направления нашей работы</h2>

            <div className={cl.components}> 
                
                <div className={cl.textComponent}>
                    <h2>Коррекция звукопроизношения</h2>
                    <p>
                        Ставим звуки Р, Л, Ш, Ж, С, З, К, Г, П, Б, автоматизируем их и вводим в речь у детей от 4 до 8 лет.текст
                    </p>
                    <StButton text={'Узнать больше'}/>
                </div>

                <div className={cl.picComponent}>
                    <img 
                        src={pic_2} 
                    />
                </div>
            </div>


            <div className={cl.components}> 
                <div className={cl.picComponent}>
                    <img 
                        src={pic_2} 
                    />
                </div>
                <div className={cl.textComponent}>
                    Коррекция звукопроизношения
                    Ставим звуки Р, Л, Ш, Ж, С, З, К, Г, П, Б, автоматизируем их и вводим в речь у детей от 4 до 8 лет.текст
                    <StButton text={'Узнать больше'}/>
                </div>
            </div>
        </div>
    );
}

export default BlockFotoText;

