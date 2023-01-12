import { useTranslation } from "react-i18next"
import { Switch } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ModalInicio({back}){
    const [t,i18n] = useTranslation("global")
    return(
        <div className="absolute bg-white h-full w-full flex flex-col">
            <div className="flex justify-around">
                <ArrowBackIcon className="cursor-pointer" fontSize='large' onClick={back}/>
                <p className="text-2xl">{t("config.start")}</p>
            </div>
            <div className="flex flex-col justify-around items-center font-bold h-full">
                <div className="flex">
                    <p>{t("modals.notifications")}</p>
                    <Switch></Switch>
                </div>
                <div className="flex">
                    <p>{t("modals.notifications")}</p>
                    <Switch></Switch>
                </div>
            </div>
        </div>
    )
}