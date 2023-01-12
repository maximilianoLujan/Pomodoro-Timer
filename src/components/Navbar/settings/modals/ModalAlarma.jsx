import { useTranslation } from "react-i18next"
import { Switch } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { useState } from "react";


export default function ModalAlarma({back}){
    const [t,i18n] = useTranslation("global")
    const [sound,setSound] = useState({})
    const [volumen,setVolumen] = useState(50)
    const handleClickSound = (sonido) =>    {
        setSound({...sound,sonido})
    }
    const handleChangeRange = (e) => {
        setSound({...sound,volumen:e.target.value})
        setVolumen(e.target.value)
    }



    return(
        <div className="absolute bg-white h-full w-full flex flex-col">
            <div className="flex justify-around">
                <ArrowBackIcon className="cursor-pointer" fontSize='large' onClick={back}/>
                <p className="text-2xl">{t("config.alarm")}</p>
            </div>
            <div className="flex flex-col justify-around items-center font-bold h-full">
                <p className="">
                    {t("modals.alarm")}
                </p>
                <div className="flex border-slate-400  border-2 border-solid w-full justify-evenly rounded">
                    <button onClick={() => handleClickSound('sound')} className="w-full border-r-2 p-2 focus:bg-blue-600 text-xs">Sound</button>
                    <button onClick={() => handleClickSound('sound 2')} className="w-full border-r-2 p-2 focus:bg-blue-600 text-xs">Sound 2</button>
                    <button onClick={() => handleClickSound('long')} className="w-full border-r-2 p-2 focus:bg-blue-600 text-xs">Long</button>
                    <button onClick={() => handleClickSound('mute')} className="w-full p-2 focus:bg-blue-600 text-xs">
                        <VolumeMuteIcon />
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-between">
                    <p className="font-bold">VOLUMEN</p>
                    <p className="font-bold">{volumen}</p>
                </div>
                <input defaultValue={50} onChange={handleChangeRange} className="w-full" type="range" name="range" />
            </div>
        </div>
    )
}