import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PostList } from "../Components/PostList";
import { Context } from "../Context/ContextProvider";
import style from "../CSS/toggleModel.module.css";
import cross from "../PNG/cross.png";
import search from "../PNG/search.png";
export const ToggleModal = ({ onRequestClose }) => {

  const [query, setQuery] = React.useState("happy");
  const [data, setData] = useState([]);
  const {post,setPost} = useContext(Context)
  
  const apiKey = "pWi8HI7Ni2djyWoUsoY0vU71GNqHRyrq";

  const handleGifSearch = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=5%22`)
    .then((res) => res.json())
    .then((res) => {
    console.log(res.data);
    setData(res.data);
    });
    // setPost[text](query)
    // console.log(post)
  };
 useEffect(()=>{
    handleGifSearch()
 },[])
  return (
    <div className={style.toggleModleOuterContainer}>
    <div className={style.toggleModelContainer}>
      <div className={style.toggleModelHeader}>
        <h3>Choose a Gif</h3>
        <button type="button" onClick={onRequestClose}>
          <img src={cross} alt="" />
        </button>
      </div>
      <div className={style.searchContainer}>
        <img src={search} alt="" onClick={handleGifSearch} />
        <input
          type="text"
          onKeyPress={(e) => {
            console.log(e.key);
            if (e.key == "Enter") {
              handleGifSearch()
            }
            setTimeout(()=>{
                handleGifSearch()
            },0)
          }}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
    <div className={style.gifSearchResult}>
        {data.map((item) => {
          return <PostList image={item.images.downsized.url} id = {item.id} />;
        })}
    </div>
    </div>
  );
};
