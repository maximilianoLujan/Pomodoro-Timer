import { useTranslation } from "react-i18next"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Task from "./Task"

export default function Todos(){
    const [t] = useTranslation("global")
    return(
        <div className="w-full lg:w-1/4 p-6">
            <div className="flex justify-between items-center mb-4">
                <div className="flex">
                    <p className="mr-4 text-3xl font-bold">{t("todos.task")}</p>
                    <p className=" text-3xl font-bold">0</p>
                </div>
                <div >
                    <MoreHorizIcon className="cursor-pointer" fontSize="medium"/>
                </div>
            </div>
            <Task/>
        </div>
    )
}