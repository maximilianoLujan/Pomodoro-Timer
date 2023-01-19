import { useState , useEffect } from "react"
import { useTranslation } from "react-i18next"


export default function CounterClock({ bg , time , name}){
    const [t] = useTranslation("global")

    return(
        <div className="w-60 lg:w-96 h-60 lg:h-96 relative">
            <div 
            className="w-60 lg:w-96 h-60 lg:h-96 rounded-full border-2 flex items-center justify-center" 
            style={{
                borderColor:bg,
                boxShadow:'6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)'}}>
                <div className="w-56 lg:w-80 h-56 lg:h-80 rounded-full border-2 flex flex-col items-center justify-center" 
                    style={{borderColor:bg,
                        boxShadow:'inset 4px 4px 6px -1px rgba(0,0,0,0.2),inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)'}}>
                        <div className="flex flex-col items-center"> 
                            <p className="font-light tracking-wide text-7xl" style={{color:bg}}>
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
            <circle className="fill-none stroke-blue-600" cx="192px" cy="192px" r="175px"
            strokeLinecap="round"
            style={{
                strokeWidth:'35px',
                strokeDasharray:'0',
                strokeDashoffset:'10'
            }} 
            />
            </svg>
        </div>
    )
}