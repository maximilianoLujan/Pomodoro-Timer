import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from "react-i18next";

export default function Task(){
    const [addTask,setAddTask] =useState(false)
    const [t] = useTranslation("global")

    const handleClick = () => {
        setAddTask(!addTask)
    }

    if (addTask){
        return(<div className="p-8 flex flex-col items-start border-2 border-black">
            <input type="text" name="task" id="" />
            <div>
                <button></button>
                <button></button>
            </div>
        </div>)
    } else{
        return(
            <div onClick={handleClick} className="p-8 border-2 border-black/20 hover:border-black border-dashed rounded-md flex cursor-pointer">
                <AddIcon />
                <p>{t("todos.add")}</p>
            </div>
        )
    }




}