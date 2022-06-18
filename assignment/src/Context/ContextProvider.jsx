import { createContext, useState } from "react";
import React from "react";
export const Context = createContext();

export const ContextProvider = ({children})=> {
    const [ isModalOpen, setModalIsOpen ] = useState(false);
    const [allPost,setAllPost] = useState([])
    const [isDisabled, setDisabled] = useState(true);
    const [post,setPost] = useState({
        text : "",
          image :"",
          id:""
    })
  
  return(
    <Context.Provider value = {{post,setPost,isModalOpen, setModalIsOpen,allPost,setAllPost,isDisabled, setDisabled}} >
      {children}
    </Context.Provider>
  )
}