import { useSelector } from "react-redux" 
import { useTranslation } from "react-i18next"
import CounterClock from "./CounterClock"
import { useState } from "react"

export default function ClockUI(props){
    const [t,i18n] = useTranslation("global")
    const value = useSelector(state => state.config.value)
    const [seconds,setSeconds] = useState(60)
    const [minuts,setMinuts] = useState()
    const {pomodoro,rest,longRest} = props
    const [running,setRunning] = useState(false)


    const handleClickStart = (time) => { 
        setRunning(true)      
        let minuts = time.toFixed(0)
        setMinuts(minuts)
        let seconds = 60  
        const counter = setInterval(() => {
            seconds = seconds - 1
                if (seconds == 0){
                    minuts = minuts - 1 
                    seconds = 60
                    setMinuts(minuts)
                }
            setSeconds(seconds)
        }, 1000);
        if (running){
            setRunning(false)
            setMinuts(time.toFixed(0))
            setSeconds(60)
            clearInterval(counter)
        }    
    }

    
    if (pomodoro) return(
        <div className="flex flex-col">
            <div className="mb-4">
                <CounterClock minuts={minuts} seconds={seconds} bg='#2563EB' time={value.focus} name={value.nivel}/> 
            </div>
            {running
            ?<button onClick={() => handleClickStart(value.focus)} className="text-primary border-primary bg-slate-50 rounded-full px-12 font-bold tracking-widest text-2xl py-4 border-2">{t("clock.stop")}</button>
            :<button onClick={() => handleClickStart(value.focus)} className="bg-primary text-white rounded-full px-12 font-bold tracking-widest text-2xl py-4">{t("clock.start")}</button>
            }
        </div>
    )
    if (rest) return(
        <div className="flex flex-col">
            <div className="mb-4">
               <CounterClock minuts={minuts} seconds={seconds} bg='#059669' time={value.recreo}  name={value.nivel}/> 
            </div>
            {running
            ?<button onClick={() => handleClickStart(value.recreo)} className="text-primary border-primary bg-slate-50 rounded-full px-12 font-bold tracking-widest text-2xl py-4 border-2">{t("clock.stop")}</button>
            :<button onClick={() => handleClickStart(value.recreo)} className="bg-secondary text-white rounded-full px-12 font-bold tracking-widest text-2xl py-4">{t("clock.start")}</button>
            }
        </div>
    )
    if (longRest) return(
        <div className="flex flex-col">
            <div className="mb-4">
                <CounterClock minuts={minuts} seconds={seconds} bg='#059669' time={value.breakLong} name={value.nivel}/> 
            </div>
            {running
            ?<button onClick={() => handleClickStart(value.breakLong)} className="text-primary border-primary bg-slate-50 rounded-full px-12 font-bold tracking-widest text-2xl py-4 border-2">{t("clock.stop")}</button>
            :<button onClick={() => handleClickStart(value.breakLong)} className="bg-secondary text-white rounded-full px-12 font-bold tracking-widest text-2xl py-4">{t("clock.start")}</button>
            }
        </div>
    )
}