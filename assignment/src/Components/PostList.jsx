import React from 'react'
import style from "../CSS/postList.module.css"
export const PostList = ({image}) => {

  return (
    <div>
      <img src={image} alt="image" className={style.gifimage}/>
    </div>
  )
}
