import { useTranslation } from "react-i18next"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Task from "./Task"
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useTodo from "../../hooks/useTodo";



export default function Todos(){
    const [t] = useTranslation("global")
    const [seeOptions,setSeeOptions] = useState(false)
    const [realizadas,setRealizadas] = useState(false)
    const [ todo, 
        addTarea,
        markTask,
        deleteUncompletedTaks,
        deleteCompletedTaks,
        setEditTask,
        cancelEditTask,
        updateTodo,
        deleteTask] = useTodo([])


    const handleClickDeleteUncompletedTasks = () => {
        const sure =  confirm("¿¿¿Are you sure???")
        sure?deleteUncompletedTaks():null
    }

    const handleClickOptions = () => {
        setSeeOptions(!seeOptions)
    }
    const handleClickDeleteCompletedTasks = () => {
        const sure = confirm("¿¿¿Are you Sure???")
        sure?deleteCompletedTaks():null
    }

    return(
        <div className="w-full sm:w-full lg:w-1/4 p-6">
            <div className="flex justify-between items-center mb-4 relative">
                <div className="flex">
                    <p className="mr-2 sm:mr-4 text-sm sm:text-3xl font-bold">{t("todos.task")}</p>
                    <p className="text-sm sm:text-3xl font-bold">{todo.length}</p>
                </div>
                <div >
                    <MoreHorizIcon onClick={handleClickOptions} className="cursor-pointer" fontSize="medium"/>
                </div>
                {seeOptions && 
                <div className="absolute w-max h-max right-0 flex flex-col rounded-md shadow-2xl p-6 bg-slate-50 z-50" style={{bottom:'-220px'}}>
                    <div onClick={() => setRealizadas(!realizadas)} className="cursor-pointer flex items-center mb-4 hover:bg-primary/30 px-4 py-2 rounded-md text-gray-800 hover:text-primary/80">
                        {realizadas && <VisibilityIcon className="mr-4"/>}
                        {!realizadas && <VisibilityOffIcon  className="mr-4" />}
                        {realizadas && <p>{t("todos.show")}</p>}
                        {!realizadas && <p>{t("todos.hide")}</p>}
                    </div>
                    <div onClick={handleClickDeleteUncompletedTasks} className="cursor-pointer flex items-center mb-4 hover:bg-primary/30 px-4 py-2 rounded-md text-gray-800 hover:text-primary/80">
                        <DeleteIcon className="mr-4" />
                        <p>{t("todos.trash")}</p>
                    </div>
                    <div onClick={handleClickDeleteCompletedTasks} className="cursor-pointer flex items-center mb-4 hover:bg-primary/30 px-4 py-2 rounded-md text-gray-800 hover:text-primary/80">
                        <DeleteIcon className="mr-4" />
                        <p >{t("todos.trashdone")}</p>

                    </div>
                </div>}
            </div>
            <Task 
            cancelEditTask={cancelEditTask} 
            todo={todo} addTarea={addTarea} 
            markTask={markTask} 
            realizadas={realizadas} 
            setEditTask={setEditTask}
            updateTodo={updateTodo}
            deleteTask={deleteTask}
            />
        </div>
    )
}