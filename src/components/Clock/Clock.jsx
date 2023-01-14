import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ClockUI from './ClockUI';

export default function Clock(){
    //Estado para elegir seccion pomodoro-rest-longrest
    const [pomodoro,setPomodoro] = useState({active:true,time:0})
    const [rest,setRest] = useState({active:false,time:0})
    const [longRest,setLongRest] = useState({active:false,time:0})

    const [t,i18n] = useTranslation("global")
    const value = useSelector(state => state.config.value)

    const handleClickPomodoro = (element) => {
        setPomodoro({...pomodoro,active:true})
        setRest({...rest,active:false})
        setLongRest({...longRest,active:false})
    }
    const handleClickRest = (element) => {
        setPomodoro({...pomodoro,active:false})
        setRest({...rest,active:true})
        setLongRest({...longRest,active:false})
    }
    const handleClickLongRest = (element) => {
        setPomodoro({...pomodoro,active:false})
        setRest({...rest,active:false})
        setLongRest({...longRest,active:true})
    }
    return(
        <div className="w-full lg:w-3/4 flex flex-col items-center lg:border-r-2">
            <h2 className='font-bold mt-8 text-xl'>¿{t("clock.challenge")}? 😒</h2>
            <div className='flex mt-14 w-3/4 justify-evenly'>
                <button className={pomodoro.active?'flex text-xl py-2 px-10 text-primary hover:bg-primary/10 border-b-2 border-black':'flex text-xl py-2 px-10 text-primary hover:bg-primary/10'} onClick={(e) => handleClickPomodoro(e.target)}>
                    <p className='mr-4'>{t("modals.concentration.pomodoro")}</p>
                    <p className='font-black'>{pomodoro.time}</p>
                </button>
                <button className={rest.active?'flex text-xl py-2 px-10 text-secondary hover:bg-secondary/10 border-b-2 border-black':'flex text-xl py-2 px-10 text-secondary hover:bg-secondary/10'}  onClick={(e) => handleClickRest(e.target)}>
                    <p className='mr-4'>{t("modals.concentration.break")} </p>
                    <p className='font-black'>{rest.time}</p>
                </button>
                <button className={longRest.active?'flex text-xl py-2 px-10 text-secondary hover:bg-secondary/10 border-b-2 border-black':'flex text-xl py-2 px-10 text-secondary hover:bg-secondary/10'} onClick={(e) => handleClickLongRest(e.target)}>
                    <p className='mr-4'>{t("modals.concentration.breaklong")}</p>
                    <p className='font-black'>{longRest.time}</p>
                </button>
            </div>
            <ClockUI pomodoro={pomodoro.active} rest={rest.active} longRest={longRest.active}/> 		
        </div>
    )
}