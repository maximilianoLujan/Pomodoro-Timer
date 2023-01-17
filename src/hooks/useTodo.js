import { useState } from "react";

export default function useTodo(initialState){
    const [todo,setTodo] = useState(initialState)

    const addTarea = (tarea) => {
        setTodo([...todo,tarea])
    }
    
    const markTask = (id) => {
        const newList = todo.map(el => {
            if (el.id == id){
                el.done = !el.done
            }
            return el
        })
        console.log(newList)
        setTodo(newList)
    }
    const deleteUncompletedTaks = () => {
        const newTodo = todo.filter(el => el.done != false)
        setTodo(newTodo)
    }
    const deleteCompletedTaks = () => {
        const newTodo = todo.filter(el => el.done == false)
        setTodo(newTodo)
    }




    return [ todo , addTarea , markTask , deleteUncompletedTaks , deleteCompletedTaks]
}