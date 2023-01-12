import { useTranslation } from "react-i18next"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";


export default function ModalConcentracion({back}){
    const [t,i18n] = useTranslation("global")
    const [concentration,setConcentration] = useState('')
    const [isCustomize,setIsCustomize] = useState(false) 
    const [custom,setCustom] = useState({})
    const handleClickRadio = (e) => {
        setConcentration(e.target.value)
        if (e.target.value == 'personalizado'){
            setIsCustomize(true)
        } else{
            setIsCustomize(false)
        }
    }
    const handleChangeTime = (e) => {
        const auxiliar = e.target.id
        custom.auxiliar = e.target.value
        setCustom(custom)
    }

    return(
        <div className="absolute bg-white h-full w-full flex flex-col">
            <div className="flex justify-around">
                <ArrowBackIcon className="cursor-pointer" fontSize='large' onClick={back}/>
                <p className="text-2xl">{t("modals.concentration.title")}</p>
            </div>
            <form className="flex flex-col">
                <div className="w-full flex my-3">
                    <label>
                        <input defaultChecked onClick={handleClickRadio} className="w-6 scale-150" type="radio" name="concentracion" value={'bebe'} />
                    </label>
                        <div>
                            {t("modals.concentration.baby")}
                            <p>10 min  *  5 min  *  10min</p>
                        </div>
                </div>
                <div className="w-full flex mb-3">
                    <label>
                        <input onClick={handleClickRadio} className="w-6 scale-150" type="radio" name="concentracion" value={'popular'} />
                    </label>
                        <div>
                            {t("modals.concentration.popular")}
                            <p>20 min  *  5 min  *  15min</p>
                        </div>
                </div>
                <div className="w-full flex mb-3">
                    <label>
                        <input onClick={handleClickRadio} className="w-6 scale-150" type="radio" name="concentracion" value={'medio'} />
                    </label>
                        <div>
                            {t("modals.concentration.midle")}
                            <p>40 min  *  8 min  *  20min</p>
                        </div>
                </div>
                <div className="w-full flex mb-3">
                    <label>
                        <input onClick={handleClickRadio} className="w-6 scale-150" type="radio" name="concentracion" value={'extendido'} />
                    </label>
                        <div>
                            {t("modals.concentration.extended")}
                            <p>60 min  *  10 min  *  25min</p>
                        </div>
                </div>
                <div className="w-full flex mb-3">
                    <label>
                        <input onClick={handleClickRadio} className="w-6 scale-150" type="radio" name="concentracion" value={'personalizado'} />
                    </label>
                        <div className="w-full">
                            {t("modals.concentration.personalize")}
                            <section className="relative w-full">
                                <div>
                                    <div className="flex justify-between">
                                        <p>{custom.focus} min</p>
                                        <p>{t("modals.concentration.pomodoro")}</p>
                                    </div>
                                    <input defaultValue={50}  disabled={!isCustomize} className="w-full" onChange={handleChangeTime} max={100} type="range" name="time" id="focus"/>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <p>{custom.break} min</p>
                                        <p>{t("modals.concentration.break")}</p>
                                    </div>
                                    <input  defaultValue={50} disabled={!isCustomize} className="w-full" onChange={handleChangeTime} max={100} type="range" name="time" id="break"/>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <p>{custom.breakLong} min</p>
                                        <p>{t("modals.concentration.breaklong")}</p>
                                    </div>
                                    <input  defaultValue={50} disabled={!isCustomize} className="w-full" onChange={handleChangeTime} max={100} type="range" name="time" id="breakLong"/>
                                </div>
                            </section>
                        </div>
                </div>
            </form>
        </div>
    )
}