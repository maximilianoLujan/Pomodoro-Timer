
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



export default function IndividualTask(props){
    const {task,
        setEditTask,
        handleClickDeleteTask,
        handleMouseOver,
        handleMouseOut,
        options} = props



    return(
    <>
        {options && <div onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} className="flex items-center absolute p-2 bg-white rounded-md right-1 top-1 z-40">
            <DeleteIcon  className="mr-4 text-gray-600" onClick={() => handleClickDeleteTask(task.id , task.taskName)}/>
            <EditIcon className="text-gray-600" onClick={() => setEditTask(task.id)}/>
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