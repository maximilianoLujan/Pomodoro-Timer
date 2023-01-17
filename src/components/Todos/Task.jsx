import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';


export default function Task(props){
    const [addTask,setAddTask] =useState(false)
    const [taskName , setTaskName] = useState('')
    const [task,setTask] = useState({})
    const [t] = useTranslation("global")
    const {todo,addTarea,markTask,realizadas} = props

    const handleClick = () => {
        setAddTask(!addTask)
    }


    const handleChangeInput = (e) => {
        if (!e.target.value) return 
        setTaskName(e.target.value)
    }

    const handleClickEnviar = (e) =>{
        if (!taskName) return
        const newTask = {taskName,id:uuidv4(),done:false}
        setTask(newTask)
        addTarea(newTask)
        setTaskName('')
    }

    if (addTask){
        return(
        <>
            <TaskList />
        <div className="p-6 flex flex-col items-start border-2 border-black rounded-md">
            <input onChange={handleChangeInput} placeholder={t("todos.placeholder")} value={taskName} type="text" name="task" className="mb-4 border-0 outline-0" />
            <div className="flex">
                <button className="bg-primary/90 text-neutral-200 py-2 px-6 rounded-md hover:bg-primary" onClick={handleClickEnviar}>{t("todos.button1")}</button>
                <button className="py-2 px-6 rounded-md hover:bg-primary/10 hover:text-primary" onClick={handleClick}>{t("todos.button2")}</button>
            </div>
        </div>
        </>
        )
    } else{
        return(
            <>
                <TaskList />
                <div onClick={handleClick} className="p-6 border-2 border-black/20 hover:border-black border-dashed rounded-md flex cursor-pointer">
                    <AddIcon />
                    <p>{t("todos.add")}</p>
                </div>
            </>
        )
    }


    function TaskList(){
        const [edit,setEdit] = useState(false)

        if (!realizadas){
            return(
                <>
                    {todo.map(el => 
                    <div key={el.id} className={"flex items-center mb-2 p-6 border-2 border-black/30 rounded-md cursor-pointer justify-between"}>
                        <div className="flex items-center justify-center">
                            <input onClick={() => markTask(el.id)} onChange={() => console.log("")} checked={el.done} type="radio" name={`${el.taskName}Check`} className="scale-150 mr-4"/>
                            <p className={el.done?'text-slate-500 line-through':''}>{el.taskName}</p>
                        </div>    
                        <div className="flex items-center">
                            <MoreHorizIcon className="mr-4"/>
                            <EditIcon/>
                        </div>
                    </div>
                    )}
                </>
            )
        } else {
            return(
                <>
                {todo.map(el => 
                el.done
                ?null
                :
                <div key={el.id} className={"flex items-center mb-2 p-6 border-2 border-black/30 rounded-md cursor-pointer justify-between"}>
                        <div className="flex items-center justify-center">
                            <input onChange={() => markTask(el.id)} checked={el.done} type="radio" name={`${el.taskName}Check`} className="scale-150 mr-4"/>
                            <p className={el.done?'text-gray line-through':''}>{el.taskName}</p>
                        </div>    
                        <div className="flex items-center">
                            <MoreHorizIcon className="mr-4"/>
                            <EditIcon/>
                        </div>
                </div>
                )}
                </>
            )
        }
    }

}