import { useState , useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

export default function CounterClock({ bg , time , name }){
    const value = useSelector(state => state.config.value)
    const [t] = useTranslation("global")
    const [running,setRunning] = useState(false)
    const [minuts,setMinuts] = useState()
    const [seconds,setSeconds] = useState()



    const handleClickStart = (minutos) => {
        let segundos = 0
        let minutitos = minutos
        const run = setInterval(() => {
            if (segundos == 0){
                if (minutitos == 0 && segundos == 0){
                    clearInterval(run)
                } else {
                    minutitos = minutitos - 1
                    setMinuts(minutitos)
                }
                segundos = 59
            }
            setSeconds(segundos)
            segundos = segundos - 1

            console.log(minutitos,segundos)
        }, 1000);
        setRunning(true)
    }
    const handleClickStop = () => {
        setRunning(false)
    }
    
    return(
        <div className="flex flex-col">
            {running
            ?
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
                                <p className="font-light tracking-wide text-7xl flex" style={{color:bg}}>
                                    {minuts}:{seconds?seconds:<>00</>}
                                </p>
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
                <circle className="fill-none stroke-blue-600 hidden lg:block" cx="192px" cy="192px" r="175px"
                strokeLinecap="round"
                style={{
                    strokeWidth:'35px',
                    strokeDasharray:'1100',
                    strokeDashoffset:'1100'
                }} 
                />
                <circle className="fill-none stroke-blue-600 lg:hidden" cx="120px" cy="120px" r="115px"
                strokeLinecap="round"
                style={{
                    strokeWidth:'10px',
                    strokeDasharray:'1100',
                    strokeDashoffset:'1100'
                }} 
                />
                </svg>
            </div>
            :
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
                            <p className="font-light tracking-wide text-7xl flex" style={{color:bg}}>
                                {time}:00
                            </p>
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
            <circle className="fill-none stroke-blue-600 hidden lg:block" cx="192px" cy="192px" r="175px"
            strokeLinecap="round"
            style={{
                strokeWidth:'35px',
                strokeDasharray:'1100',
                strokeDashoffset:'1100'
            }} 
            />
            <circle className="fill-none stroke-blue-600 lg:hidden" cx="120px" cy="120px" r="115px"
            strokeLinecap="round"
            style={{
                strokeWidth:'10px',
                strokeDasharray:'1100',
                strokeDashoffset:'1100'
            }} 
            />
            </svg>
        </div>
            }
            {running
            ?<button onClick={() => handleClickStop()} 
            style={{color:bg,borderColor:bg}}
            className=' bg-slate-50 rounded-full px-12 font-bold tracking-widest text-2xl py-4 border-2'>{t("clock.stop")}</button>
            :<button onClick={() => handleClickStart(time)} style={{backgroundColor:bg}} className="bg-secondary text-white rounded-full px-12 font-bold tracking-widest text-2xl py-4">{t("clock.start")}</button>
            }
        </div>
    )
}