import Listitem from "../components/Listitem";
import { useState, useRef } from "react";
function Todo(){
//useState -> [state, useState]
const [todos, setTodos] = useState([]);

//add a new todo
const inputRef = useRef (null);
const addTodo =() => {
    const todoValue = inputRef.current.vale;
    setTodos({...todos, todoValue})
   

}

return (
<div className="flex flex-col gap-2">
    
    <div className="flex gap-2">
    <input ref={inputRef} type="text" className="rounded-md bg-slate-900" />
    <button onClick={addTodo} className=" rounded-md bg-indigo-600 px-4"> Add to-do </button>
   

    </div>
    
    <ul className="flex flex-col gap-2">
        <Listitem text="Item 1"  />
        <Listitem text="Item 2" />
        <Listitem text="Item 3"/>
    </ul>
</div>
);

}

export default Todo;