import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const style = {
  li: 'flex justify-between bg-slate-200 p-4 my-2 capitalize',
  liComplete: 'flex justify-between bg-slate-400 p-4 my-2 capitalize',
  row: 'flex',
  text: 'mx-2 cursor-pointer',
  textCompelete: 'mx-2 cursor-pointer line-through',
  button: 'cursor-pointer flex items-center',
}

const Todo = ({todo}) => {
  return (
    <li className={style.li}> 
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}>{todo.text}</p>
      </div>
      <button>
        <DeleteOutlineIcon />
      </button>
    </li>
  )
}

export default Todo