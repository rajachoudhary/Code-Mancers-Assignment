import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/ContextProvider'
import style from "../CSS/postList.module.css"
export const PostList = ({image,id}) => {
  const {post,setPost,isModalOpen, setModalIsOpen, setDisabled} = useContext(Context)
  
  const handleGifpost =(id)=>{
    if(image != ""){
      setDisabled(false)
    } else {
      setDisabled(true)
    }
    setPost({
      ...post,
      image:image,
      id:id
    })
    setModalIsOpen(!isModalOpen)
  }
  return (
    <div>
      <img src={image} alt="image" className={style.gifimage}  onClick={()=>handleGifpost(id)}/>
    </div>
  )
}
