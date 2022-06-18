import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/ContextProvider'
import like from "../PNG/like.png"
import share from "../PNG/share.png"
import comment from "../PNG/comment.png"
import style from "../CSS/allPost.module.css"

export const AllPost = () => {
    const {allPost} = useContext(Context)
  return (
    <div>
        {
            allPost.map((item)=>{
                return(
                    <div className={style.allPostContainer}>
                        <div className={style.allPostHeader}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS841L_InCaxGysGNZxvYTO0C8TFT4YlJgGXQ&usqp=CAU" alt="profile" />
                            <p>Username</p>
                        </div>
                        <div className={style.allPostImage}>
                            <p>{item.text}</p>
                            <img src={item.image} alt="" />
                        </div>
                        <hr />
                        <div className={style.allPostLikeShareComment}>
                            <div>
                                <img src={like} alt="" />
                                
                            </div>
                            <div>
                                <img src={comment} alt="" />
                            </div>
                            <div>
                                <img src={share} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
