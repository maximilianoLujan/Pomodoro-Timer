import { useTranslation } from "react-i18next"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useState } from "react";
import { Howl } from "howler"; 
import { useDispatch } from "react-redux";
import { setConfigAlarm } from "../../../../features/configAlarm/configAlarm";


const sounds = [{
    id:1,
    name:'nextel',
    sound:'sounds/nextel.mp3',
},
{
    id:2,
    name:'phone',
    sound:'sounds/phone.mp3',
},
{
    id:3,
    name:'xperia',
    sound:'sounds/xperia.mp3',
}]

export default function ModalAlarma({back}){
    const [t] = useTranslation("global")
    const [volumen,setVolumen] = useState(50)
    const [sound,setSound] = useState()
    const dispatch = useDispatch()


    const handleClickSound = (sonido) =>    {
        setSound(sonido)
        const soundHowl = new Howl({
            src: [sonido.sound],
            volume: volumen / 100 
        });
        setTimeout(() => {
            soundHowl.stop()
        }, 3000);
        soundHowl.play()
        dispatch(setConfigAlarm({sonido,volumen}))

    }

    const handleChangeRange = (e) => {
        setVolumen(e.target.value)
        const sonido = {
            sound:sound
        }
        dispatch(setConfigAlarm({sonido,volumen}))
    }

    const handleClickRange = (e) => {
        setVolumen(e.target.value)
        const sonido = {
            sound:sound
        }
        dispatch(setConfigAlarm({sonido,volumen}))
    }

    const handleClickMute = () => {
        const sonido = {
            sound: ''
        }
        setVolumen(0)
        dispatch(setConfigAlarm({sonido,volumen}))
    }


    return(
        <div className="bg-white h-max w-full flex flex-col p-6">
            <div className="flex mb-6">
                <ArrowBackIcon className="cursor-pointer hover:text-blue-600 mr-4" fontSize='large' onClick={back}/>
                <p className="text-2xl">{t("config.alarm")}</p>
            </div>
            <div className="flex flex-col justify-around items-center font-bold h-full mb-4">
                <p className="mb-2 text-left w-full">
                    {t("modals.alarm")}
                </p>
                <div className="flex border-slate-400  border-2 border-solid w-full justify-evenly rounded">
                    {sounds.map(sound => <button key={sound.id} onClick={() => handleClickSound(sound)} className='w-full border-r-2 p-2 focus:bg-blue-600 text-xs'>{sound.name}</button>)}
                    <button onClick={() => handleClickMute()} className="w-full p-2 focus:bg-blue-600 text-xs">
                        <VolumeOffIcon />
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-between mb-2">
                    <p className="font-bold">VOLUMEN</p>
                    <p className="font-bold">{volumen}%</p>
                </div>
                <input value={volumen} onClick={handleClickRange} onChange={handleChangeRange} className="w-full" type="range" name="range" />
            </div>
        </div>
    )
}