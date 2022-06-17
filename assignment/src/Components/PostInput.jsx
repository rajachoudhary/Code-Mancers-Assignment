import React from 'react'
import style from "../CSS/postInput.module.css"
import emoji from "../PNG/emoji.png"
import gif from "../PNG/gif.png"
import location from "../PNG/location.png"
import loud from "../PNG/loud.png"
import photos from "../PNG/photos.png"
import tag from "../PNG/tag.png"
export const PostInput = () => {
  return (
    <div>
        <div className={style.profileContainer}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS841L_InCaxGysGNZxvYTO0C8TFT4YlJgGXQ&usqp=CAU" alt="profile" />
            <p>Raja Choudhary</p>
        </div>
        <div className={style.inputBox}>
            <input type="text" placeholder="What's on your mind?" />
        </div>
        <div className={style.imgContainer}>
            <p>Add to your post</p>
            <div>
                <img src={photos} alt="" />
                <img src={tag} alt="" />
                <img src={emoji} alt="" />
                <img src={location} alt="" />
                <img src={loud} alt="" />
                <img src={gif} alt="" />
            </div>
        </div>
    </div>
  )
}
