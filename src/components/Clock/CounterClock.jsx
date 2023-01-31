import { useState , useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { Howl } from "howler"
import { useDispatch } from "react-redux"
import { setFalse , setTrue } from "../../features/running/running"


const DASH = 1100,
    DASH_MOVIL = 730


export default function CounterClock({ bg , time , name , increase, concentration , setActive , offActive}){
    const value = useSelector(state => state.config.value)
    const valueAlarm = useSelector(state => state.alarm.value)
    const dispatch = useDispatch()
    const [t] = useTranslation("global")
    const [running,setRunning] = useState(false)
    const [interv,setInterv] = useState()
    const [minuts,setMinuts] = useState()
    const [seconds,setSeconds] = useState(0)
    const [dash,setDash] = useState(DASH)
    const [dashMovil,setDashMovil] = useState(DASH_MOVIL)

    useEffect(() => {
        setMinuts(value.focus)
    },[])

    const handleClickStart = () =>{
        dispatch(setTrue())
        let run = true
        setActive(concentration)
        setRunning(true)
        let minuts = time
        let seconds = 0
        setMinuts(minuts)
        const cont = setInterval(() => {
            if (run == false) return
            const currentTime = minuts * 60 + seconds,
                porcentaje = (currentTime * 100) / (time *60),
                dash = (DASH * porcentaje) / 100,
                dashMovil = (DASH_MOVIL * porcentaje) / 100
            if (seconds == 0 && minuts == 0){
                increase(concentration)
                handleClickStop()
                soundAlarm(valueAlarm)
                run = false
            } else if (seconds == 0){
                    seconds = 59
                    minuts = minuts - 1
                    setSeconds(seconds)
                } else{
                seconds = seconds - 1
                    setSeconds(seconds)
                }
            setMinuts(minuts)
            setDash(dash)
            setDashMovil(dashMovil)
        },1000)
        setInterv(cont)
    }


    const handleClickStop = () => {
        setDash(DASH)
        setDashMovil(DASH_MOVIL)
        dispatch(setFalse())
        offActive()
        setRunning(false)
        const cont = interv
        clearInterval(cont)
        setInterv(cont)
        setMinuts(value.focus)
        setSeconds(0)
    }
    return(
        <div className="flex flex-col">
            <div className="w-60 lg:w-96 h-60 lg:h-96 relative mb-8">
                <div 
                className="w-60 lg:w-96 h-60 lg:h-96 rounded-full border-2 flex items-center justify-center" 
                style={{
                    borderColor:bg,
                    boxShadow:'6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)'}}>
                    <div className="w-56 lg:w-80 h-56 lg:h-80 rounded-full border-2 flex flex-col items-center justify-center" 
                        style={{borderColor:bg,
                            boxShadow:'inset 4px 4px 6px -1px rgba(0,0,0,0.2),inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)'}}>
                            <div className="flex flex-col items-center"> 
                                {running
                                ?<p className="font-bold tracking-wide text-7xl flex" style={{color:bg}}>
                                    {minuts <= 9?`0${minuts}`:minuts}:{seconds <= 9?`0${seconds}`:seconds}
                                </p>
                                :<p className="font-bold tracking-wide text-7xl flex" style={{color:bg}}>
                                    {time <= 9?`0${time}`:time}:{seconds <= 9?`0${seconds}`:seconds}
                                </p>}
                                <div className="flex flex-col items-center mt-4">
                                    <p style={{color:bg}}>
                                        {t("clock.level")}
                                    </p>
                                    <p className="font-bold" style={{color:bg}}>
                                        {name}
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width='15rem' height='15rem'
                className="w-60 lg:w-96 h-60 lg:h-96 absolute top-0 left-0">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle id="circlereloj" className="fill-none hidden lg:block" cx="192px" cy="192px" r="175px"
                strokeLinecap="round"
                style={{
                    stroke:bg,                               
                    strokeWidth:'35px',
                    strokeDasharray:'1100',
                    strokeDashoffset:dash?dash:DASH
                }} 
                />
                <circle className="fill-none lg:hidden" cx="120px" cy="120px" r="115px"
                strokeLinecap="round"
                style={{
                    stroke:bg,
                    strokeWidth:'10px',
                    strokeDasharray:'730',
                    strokeDashoffset:dashMovil?dashMovil:DASH_MOVIL
                }} 
                />
                </svg>
            </div>
            {running
            ?<button onClick={() => handleClickStop()} 
            style={{color:bg,borderColor:bg}}
            className=' bg-slate-50 rounded-full px-12 font-bold tracking-widest text-2xl py-4 border-2'>{t("clock.stop")}</button>
            :<button onClick={() => handleClickStart()} style={{backgroundColor:bg}} className="bg-secondary text-white rounded-full px-12 font-bold tracking-widest text-2xl py-4">{t("clock.start")}</button>
            }
        </div>
    )
}




function soundAlarm(sound){
    const soundHowl = new Howl({
        src: [sound.src],
        volume: sound.volume / 100
    });


    soundHowl.play()
    console.log("suena la alarma")
    
    setTimeout(() => {
        soundHowl.stop()
        console.log("se detiene la alarma")
    }, 2000);
}