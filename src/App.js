import React, {useState, useEffect} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Todo from "./Todo";
import { collection, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import { db } from "./firebase";


const style = {
  bg: 'h-screen w-screen p-4 bg-gradient-to-r from-cyan-500 to-blue-500',
  container: 'bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4',
  heading: 'text-3xl font-bold text-center text-gray-800 p-2',
  form: 'flex justify-between',
  input: 'border p-2 w-full text-xl',
  button: 'p-4 bg-purple-600 text-slate-100 hover:bg-purple-400 ml-2',
  count: 'text-center p-2 font-bold',
}

function App() {

  const [todos, setTodos] = useState([])

  //create todo
  //Read todo form firebase database
  useEffect(()=>{
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = []
      QuerySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr)
    });
    return () => unsubscribe()
  },[])

  //Update todo in firebaes
  //delete todo

  return (
    <div className={style.bg}>

      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add To-Dooooo" />
          <button className={style.button}> <AddCircleOutlineIcon /> </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>There are 3 items</p>
      </div>

    </div>
  );
}

export default App;
