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

    const setEditTask = (id) => {
        const newTodo = todo.map(el => {
            if (el.id == id){
                el.edit = true
                return el
            } else {
                el.edit = false
                return el
            }
        })
        setTodo(newTodo)
    }
    const cancelEditTask = () => {
        const newTodo = todo.map(el => {
            el.edit = false
            return el
        })
        setTodo(newTodo)
    }

    const updateTodo = (id,newName) => {
        const newTodo = todo.map(el => {
            if (el.id == id){
                el.taskName = newName
                return el
            } else {
                return el
            }
        })

        setTodo(newTodo)
    }

    const deleteTask = (id) => {
        const newTodo = todo.filter(el => el.id != id)
        setTodo(newTodo)
    }

    return [ todo,
        addTarea,
        markTask,
        deleteUncompletedTaks,
        deleteCompletedTaks,
        setEditTask,
        cancelEditTask,
        updateTodo,
        deleteTask]
}