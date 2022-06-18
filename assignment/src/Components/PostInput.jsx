import React, { useContext } from 'react'
import { useState } from 'react'
import { Context } from '../Context/ContextProvider'
import style from "../CSS/postInput.module.css"
import { ModalDialog } from '../Modal/ModalDialog'
import emoji from "../PNG/emoji.png"
import location from "../PNG/location.png"
import loud from "../PNG/loud.png"
import photos from "../PNG/photos.png"
import tag from "../PNG/tag.png"
import { AllPost } from './AllPost'

export const PostInput = () => {
    const [query,setQuery] = useState("")
    const {post,setPost,allPost,setAllPost,isDisabled, setDisabled} = useContext(Context)
    
    const handlePost = ()=>{
       
        const newPost = {
            ...post,
            text:query
        }
        setPost(newPost)
        setQuery("")
        setAllPost([...allPost,newPost])
        
        setPost({
            text:"",
            image:""
        })
        
    }
    const handleTextArea = (e)=>{
        setQuery(e.target.value)
        if(e.target.value != ""){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
   

  return (
    <>
    <div className={style.contianer}>
        <div className={style.profileContainer}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS841L_InCaxGysGNZxvYTO0C8TFT4YlJgGXQ&usqp=CAU" alt="profile" />
            <p>Raja Choudhary</p>
        </div>
        <div className={style.inputBox}>
           
            <textarea name="textarea"  rows="10" cols="50" value={query} onChange={(e)=>handleTextArea(e)} placeholder="What's on your mind ?"></textarea>
        </div>
        <div>
            <img src={post.image} alt="" className={style.postimage}/>
        </div>
        <div className={style.imgContainer}>
            <p>Add to your post</p>
            <div>
                <img src={photos} alt="" />
                <img src={tag} alt="" />
                <img src={emoji} alt="" />
                <img src={location} alt="" />
                <img src={loud} alt="" />
                <ModalDialog className={style.gifContainer}/>
            </div>
        </div>
        <div className={`${isDisabled ? style.postButtonDisabled : style.postButton}`}>
            <button onClick={handlePost} disabled={isDisabled} >Post</button>
        </div>
    </div>
    <AllPost/>
    </>
  )
}
