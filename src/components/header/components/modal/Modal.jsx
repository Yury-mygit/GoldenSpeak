import React from 'react';
import cl from './Modal.module.css'
import { ThemeContext } from '../../../../App/App';
import { useContext } from 'react';

const Modal = ({children, show}) => {

    const modalWindow = useContext(ThemeContext)

    if (modalWindow.modal == false) return ''

    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                
                <div>
                    <h3>Форма запроса звонка</h3>
                </div>
                <div>
                    * - поля обязательные для заполнения
                </div>
                <div >
                    <input type="text" name="cheese" id="cheese" placeholder='Ваше имя'/>
                    <input type="text" name="cheese" id="cheese" placeholder='Ваше имя'/>
                </div>
                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button              
                        onClick={()=>modalWindow.setModal(!modalWindow.modal)}
                    > 
                        Отправить
                    </button>

                    <button              
                        onClick={()=>modalWindow.setModal(!modalWindow.modal)}
                    > 
                        Закрыть
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default Modal;