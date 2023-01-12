import { useTranslation } from "react-i18next"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Switch } from "@mui/material";

export default function ModalNotificacion({back}){
    const [t,i18n] = useTranslation("global")
    return(
        <div className="absolute bg-white h-full w-full flex flex-col">
            <div className="flex justify-around">
                <ArrowBackIcon className="cursor-pointer" fontSize='large' onClick={back}/>
                <p className="text-2xl">{t("config.notification")}</p>
            </div>
            <div className="flex justify-around h-full items-center font-bold">
                <Switch></Switch>
                <p>{t("modals.notifications")}</p>
            </div>
        </div>
    )
}