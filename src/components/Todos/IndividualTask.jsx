
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';



export default function IndividualTask(props){
    const {task,
        setEditTask,
        handleClickDeleteTask,
        markTask} = props


    const [options,setOptions] = useState(false)


    const handleMouseOver = () => {
        setOptions(true)
    }
    const handleMouseOut = () => {
        setOptions(false)
    }


    return(
    <>
        { 
        <div className="relative w-full">
            <div onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} className="flex items-center justify-start p-6 relative z-30">
                <input onClick={() => markTask(task.id)} onChange={() => console.log("")} checked={task.done} type="radio" name={`${task.id}Check`} className="scale-150 mr-4"/>
                <div style={{wordWrap:'break-word',wordBreak: 'break-word'}}>
                    <p className={task.done?'text-slate-500 line-through w-full':'w-full'}>{task.taskName}</p>
                </div>
            </div>    
            {options &&
            <div onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} className="flex items-center absolute p-2 bg-white rounded-md right-1 top-1 z-40">
                <DeleteIcon  className="mr-4 text-gray-600" onClick={() => handleClickDeleteTask(task.id , task.taskName)}/>
                <EditIcon className="text-gray-600" onClick={() => setEditTask(task.id)}/>
            </div>}
        </div>}
    </>
    )
}


/**
 * 
 * 
 * <div onMouseOver={handleMouseOver} className="flex items-center absolute p-2 bg-white rounded-md right-1 top-1 z-40">
        <DeleteIcon  className="mr-4 text-gray-600" onClick={() => handleClickDeleteTask(el.id , el.taskName)}/>
        <EditIcon className="text-gray-600" onClick={() => setEditTask(el.id)}/>
    </div>
 */