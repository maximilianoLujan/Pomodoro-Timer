import { useState } from "react";

export default function useTodo(initialState){
    const [todo,setTodo] = useState(initialState)

    const addTarea = (tarea) => {
        console.log(tarea)
    }

    return [ todo , addTarea]
}