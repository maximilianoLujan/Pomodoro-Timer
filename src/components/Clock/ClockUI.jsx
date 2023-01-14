import { useSelector } from "react-redux" 
import { useTranslation } from "react-i18next"


export default function ClockUI(props){
    const [t,i18n] = useTranslation("global")
    const value = useSelector(state => state.config.value)

    const {pomodoro,rest,longRest} = props

    
    if (pomodoro) return(
        <div>
            <button className="bg-primary text-white rounded-full px-12 font-bold tracking-widest text-2xl py-4">{t("clock.start")}</button>
        </div>
    )
    if (rest) return(
        <div>
            <button className="bg-secondary text-white rounded-full px-12 font-bold tracking-widest text-2xl py-4">{t("clock.start")}</button>
        </div>
    )
    if (longRest) return(
        <div>
            <button className="bg-secondary text-white rounded-full px-12 font-bold tracking-widest text-2xl py-4">{t("clock.start")}</button>
        </div>
    )
}