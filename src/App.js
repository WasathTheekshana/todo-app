import React, {useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const style = {
  bg: 'h-screen w-screen p-4 bg-gradient-to-r from-cyan-500 to-blue-500'
}

function App() {

  const [todos, setTodos] = useState(['Learn React'])

  return (
    <div className={style.bg}>

      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add To-Dooooo" />
          <button className={style.button}> <AddCircleOutlineIcon /> </button>
        </form>
        <ul>

        </ul>
      </div>

    </div>
  );
}

export default App;
