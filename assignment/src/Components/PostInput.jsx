import React from 'react'
import style from "../CSS/postInput.module.css"
import { ModalDialog } from '../Modal/ModalDialog'
import emoji from "../PNG/emoji.png"
import location from "../PNG/location.png"
import loud from "../PNG/loud.png"
import photos from "../PNG/photos.png"
import tag from "../PNG/tag.png"
export const PostInput = () => {
  return (
    <div className={style.contianer}>
        <div className={style.profileContainer}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS841L_InCaxGysGNZxvYTO0C8TFT4YlJgGXQ&usqp=CAU" alt="profile" />
            <p>Raja Choudhary</p>
        </div>
        <div className={style.inputBox}>
           
            <textarea name="textarea"  rows="10" cols="50">Write something here</textarea>
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
        <div className={style.postButton}>
            <button>Post</button>
        </div>
    </div>
  )
}
