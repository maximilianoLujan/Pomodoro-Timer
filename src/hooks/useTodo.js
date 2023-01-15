import { useState } from "react";

export default function useTodo(initialState){
    const [todo,setTodo] = useState(initialState)

    const addTarea = (tarea) => {
        setTodo([...todo,tarea])
    }
    
    const removeTask = (id) => {
        const newList = todo.filter(el => el.id != id)
        setTodo(newList)
    }
    return [ todo , addTarea , removeTask]
}