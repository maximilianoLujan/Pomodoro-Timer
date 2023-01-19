import { useTranslation } from "react-i18next"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setValues } from "../../../../features/config/configSlice";

export default function ModalConcentracion({back}){
    const dispatch = useDispatch()
    const [t,i18n] = useTranslation("global")
    const [concentration,setConcentration] = useState('')
    const [isCustomize,setIsCustomize] = useState(false) 
    const [custom,setCustom] = useState({
        nive:'Custom',
        focus:50,
        recreo:50,
        breakLong:50
    })
    const [focus,setFocus] = useState(50)
    const [recreo,setRecreo] = useState(50)
    const [breakLong,setBreakLong] = useState(50)



    //Manejamos el estado de los inputs radio
    const handleClickRadio = (e) => {
        setConcentration(e.target.value)
        if (e.target.value == 'personalizado'){
            setIsCustomize(true)
        } else{
            setIsCustomize(false)
            switch (e.target.value) {
                case 'bebe':
                    dispatch(setValues({nivel:'Paso de bebe',focus:10,recreo:5,breakLong:10}))
                    break;
                case 'popular':
                    dispatch(setValues({nivel:'Popular',focus:20,recreo:5,breakLong:15}))
                    break;
                case 'medio':
                    dispatch(setValues({nivel:'Medio',focus:40,recreo:8,breakLong:20}))
                    break;
                case 'extendido':
                    dispatch(setValues({nivel:'Extendido',focus:60,recreo:10,breakLong:25}))
                default:
                    break;
            }
        }
    }

    //Cambiamos el tiempo en caso que el usuario haya elegido personalizado
    const handleChangeTime = async (e) => {
        const auxiliar = e.target.id
        custom[auxiliar] = e.target.value
        setCustom(custom)
        switch (auxiliar) {
            case 'focus':
                setFocus(custom[auxiliar])
                break;
            case 'break':
                setRecreo(custom[auxiliar])
                break;
            case 'breakLong':
                setBreakLong(custom[auxiliar])
                break;
            
                default:
                break;
        }
        dispatch(setValues({focus,recreo,breakLong}))
    }

    
    return(
        <div className="bg-white h-max w-full flex flex-col p-6">
            <div className="flex">
                <ArrowBackIcon className="cursor-pointer hover:text-blue-600 mr-4" fontSize='large' onClick={back}/>
                <p className="text-2xl">{t("modals.concentration.title")}</p>
            </div>
            <form className="flex flex-col">
                <div className="w-full flex my-3">
                    <label>
                        <input defaultChecked onClick={handleClickRadio} className="w-6 scale-150 mr-4" type="radio" name="concentracion" value={'bebe'} />
                    </label>
                        <div>
                            <p className="font-bold">{t("modals.concentration.baby")}</p>
                            <p className="text-slate-400">10 min  *  5 min  *  10min</p>
                        </div>
                </div>
                <div className="w-full flex mb-3">
                    <label>
                        <input onClick={handleClickRadio} className="w-6 scale-150 mr-4" type="radio" name="concentracion" value={'popular'} />
                    </label>
                        <div>
                            <p className="font-bold">{t("modals.concentration.popular")}</p>
                            <p className="text-slate-400">20 min  *  5 min  *  15min</p>
                        </div>
                </div>
                <div className="w-full flex mb-3">
                    <label>
                        <input onClick={handleClickRadio} className="w-6 scale-150 mr-4" type="radio" name="concentracion" value={'medio'} />
                    </label>
                        <div>
                            <p className="font-bold">{t("modals.concentration.midle")}</p>
                            <p className="text-slate-400">40 min  *  8 min  *  20min</p>
                        </div>
                </div>
                <div className="w-full flex mb-3">
                    <label>
                        <input onClick={handleClickRadio} className="w-6 scale-150 mr-4" type="radio" name="concentracion" value={'extendido'} />
                    </label>
                        <div>
                            <p className="font-bold">{t("modals.concentration.extended")}</p>
                            <p className="text-slate-400">60 min  *  10 min  *  25min</p>
                        </div>
                </div>
                <div className="w-full flex mb-3">
                    <label>
                        <input onClick={handleClickRadio} className="w-6 scale-150 mr-4" type="radio" name="concentracion" value={'personalizado'} />
                    </label>
                        <div className="w-full">
                            <p className="font-bold">{t("modals.concentration.personalize")}</p>
                            <section className="relative w-full">
                                <div>
                                    <div className="flex justify-between">
                                        <p className="text-slate-400">{focus} min</p>
                                        <p className="text-slate-400">{t("modals.concentration.pomodoro")}</p>
                                    </div>
                                    <input defaultValue={50}  disabled={!isCustomize} className="w-full" onChange={handleChangeTime} max={100} type="range" name="time" id="focus"/>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <p className="text-slate-400">{recreo} min</p>
                                        <p className="text-slate-400">{t("modals.concentration.break")}</p>
                                    </div>
                                    <input  defaultValue={50} disabled={!isCustomize} className="w-full" onChange={handleChangeTime} max={100} type="range" name="time" id="break"/>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <p className="text-slate-400">{breakLong} min</p>
                                        <p className="text-slate-400">{t("modals.concentration.breaklong")}</p>
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