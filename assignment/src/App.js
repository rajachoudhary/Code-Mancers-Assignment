import { useContext } from "react";
import { Post } from "./Components/Post";
import { Context } from "./Context/ContextProvider";
import style from "./CSS/app.module.css"

function App() {
  const {isModalOpen} = useContext(Context)
  return (
    <div className={`${isModalOpen ? style.disabledApp : style.app}`}>
     <Post/>
    </div>
  );
}

export default App;
