import { useTranslation } from "react-i18next"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Switch } from "@mui/material";

export default function ModalNotificacion({back}){
    const [t,i18n] = useTranslation("global")
    return(
        <div className="bg-slate-50 h-max w-full flex flex-col p-6">
            <div className="flex mb-6">
                <ArrowBackIcon className="cursor-pointer hover:text-blue-600 mr-4" fontSize='large' onClick={back}/>
                <p className="text-2xl">{t("config.notification")}</p>
            </div>
            <div className="flex justify-around h-full items-center font-bold">
                <Switch></Switch>
                <p>{t("modals.notifications")}</p>
            </div>
        </div>
    )
}