import { useTranslation } from "react-i18next";
import DoneIcon from '@mui/icons-material/Done';


export default function ModalLng({cerrar}){
    const [t,i18n] = useTranslation("global")

    function changeLanguage(newLanguage){
        i18n.changeLanguage(newLanguage)
        localStorage.setItem("lng",newLanguage)
        cerrar()
    }

    return (
        <div  style={{left:'-9rem',width:'9rem'}} className="p-2 absolute z-50 bg-slate-50 flex flex-col shadow-2xl m-4">
            <div onClick={() => changeLanguage("en")} className="h-10 flex items-center cursor-pointer hover:bg-sky-500 hover:text-sky-100">
                <div className="w-8">
                {i18n.language == "en"
                ?<DoneIcon/>
                :null}
                </div>
                <p>English</p>
            </div>
            <div onClick={() => changeLanguage("es")} className="h-10 flex items-center cursor-pointer hover:bg-sky-500 hover:text-sky-100">
                <div className="w-8">
                    {i18n.language == "es"
                    ?<DoneIcon/>
                    :null}
                </div>
                <p>Spanish</p>
            </div>
            <div onClick={() => changeLanguage("pt")} className="h-10 flex items-center cursor-pointer hover:bg-sky-500 hover:text-sky-100">
                <div className="w-8">
                {i18n.language == "pt"
                ?<DoneIcon/>
                :null}
                </div>
                <p >Portugues</p>
             </div>
        </div>
    )
}