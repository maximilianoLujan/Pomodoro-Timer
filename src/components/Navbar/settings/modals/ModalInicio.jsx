import { useTranslation } from "react-i18next"
import { Switch } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ModalInicio({back}){
    const [t,i18n] = useTranslation("global")
    return(
        <div className="bg-white h-max w-full flex flex-col p-6">
            <div className="flex mb-6">
                <ArrowBackIcon className="cursor-pointer hover:text-blue-600 mr-4" fontSize='large' onClick={back}/>
                <p className="text-2xl">{t("config.start")}</p>
            </div>
            <div className="flex flex-col justify-around items-center font-bold h-full">
                <div className="flex items-center">
                    <p className="text-sm">{t("modals.notifications")}</p>
                    <Switch></Switch>
                </div>
                <div className="flex items-center">
                    <p className="text-sm">{t("modals.notifications")}</p>
                    <Switch></Switch>
                </div>
            </div>
        </div>
    )
}