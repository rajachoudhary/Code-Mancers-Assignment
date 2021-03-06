import React, { useState } from 'react';
import { ToggleModal } from './ToggleModal';
import style from "../CSS/modalDialog.module.css"
import gif from "../PNG/gif.png"
import { useContext } from 'react';
import { Context } from '../Context/ContextProvider';

export const ModalDialog = () => {

    const { isModalOpen, setModalIsOpen } = useContext(Context);

    // console.log(useState("hello")[ 1 ]);
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };

    return (
        <div className={style.mainContainer}>
            { isModalOpen && <ToggleModal onRequestClose={ toggleModal } /> }
            
            <button onClick={ toggleModal } className={style.gifButton}>
                <img src={gif} alt="" />
            </button>
            
        </div>
    );

};