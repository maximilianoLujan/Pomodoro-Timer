import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ClockUI from './ClockUI';

export default function Clock(){
    //Estado para elegir seccion pomodoro-rest-longrest
    const [pomodoro,setPomodoro] = useState({active:true,time:0})
    const [rest,setRest] = useState({active:false,time:0})
    const [longRest,setLongRest] = useState({active:false,time:0})
    const [running,setRunning] = useState(false)

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


    //Esta funcion incrementa las veces que el usuario cuplio el tiempo propuesto
    const increase= (value) =>{
        switch (value) {
            case 'focus':
                const focus = pomodoro.time + 1
                setPomodoro({...pomodoro,time:focus})
                break;
            case 'recreo':
                const recreo = rest.time + 1
                setRest({...rest,time:recreo})
                break;
            case 'breakLong':
                const breakLong = longRest.time + 1
                setLongRest({...longRest,time:breakLong})
                break;
        
            default:
                break;
        }
    }

    const setActive = (value) => {
        switch (value) {
            case 'focus':
                setRunning(true)
                setPomodoro({...pomodoro,active:true})
                setRest({...rest,active:false})
                setLongRest({...longRest,active:false})
                break;
            case 'recreo':
                setRunning(true)
                setPomodoro({...pomodoro,active:false})
                setRest({...rest,active:true})
                setLongRest({...longRest,active:false})
                break;
            case 'breakLong':
                setRunning(true)
                setPomodoro({...pomodoro,active:false})
                setRest({...rest,active:false})
                setLongRest({...longRest,active:true})
                break;
        
            default:
                break;
        }
    }
    const offActive = () => {
        setRunning(false)
    }

    return(
        <div className="w-full lg:w-3/4 flex flex-col items-center lg:border-r-2">
            <h2 className='font-bold text-xl'>¿{t("clock.challenge")}? 😒</h2>
            <div className='flex mt-10 w-full justify-evenly mb-10'>
                <div className={pomodoro.active?'border-b-2 border-black':''}>
                    <button disabled={!pomodoro.active && running} className={running && !pomodoro.active?'flex flex-col sm:flex-row text-sm sm:text-xl py-2 px-2 sm:px-10 text-primary hover:bg-primary/10 items-center cursor-not-allowed opacity-50':' flex flex-col sm:flex-row text-sm sm:text-xl py-2 px-2 sm:px-10 text-primary hover:bg-primary/10 items-center'} onClick={(e) => handleClickPomodoro(e.target)}>
                        <p className='text-center md:mr-4'>{t("modals.concentration.pomodoro")}</p>
                        <p className='font-black'>{pomodoro.time}</p>
                    </button>
                </div>
                <div className={rest.active?'border-b-2 border-black':''}>
                    <button disabled={!rest.active && running} className={!rest.active && running?'flex flex-col sm:flex-row text-sm sm:text-xl py-2 px-2 sm:px-10 text-secondary hover:bg-secondary/10  items-center cursor-not-allowed opacity-50':' flex flex-col sm:flex-row text-sm sm:text-xl py-2 px-2 sm:px-10 text-secondary hover:bg-primary/10 items-center'}  onClick={(e) => handleClickRest(e.target)}>
                        <p className='text-center md:mr-4'>{t("modals.concentration.break")} </p>
                        <p className='font-black'>{rest.time}</p>
                    </button>
                </div>
                <div className={longRest.active?'border-b-2 border-black':''}>
                    <button disabled={!longRest.active && running} className={!longRest.active && running?'flex flex-col sm:flex-row text-sm sm:text-xl py-2 px-2 sm:px-10 text-secondary hover:bg-secondary/10 items-center cursor-not-allowed opacity-50':' flex flex-col sm:flex-row text-sm sm:text-xl py-2 px-2 sm:px-10 text-secondary hover:bg-primary/10 items-center'} onClick={(e) => handleClickLongRest(e.target)}>
                        <p className='text-center md:mr-4'>{t("modals.concentration.breaklong")}</p>
                        <p className='font-black'>{longRest.time}</p>
                    </button>
                </div>
            </div>
            <ClockUI offActive={offActive} setActive={setActive} pomodoro={pomodoro.active} rest={rest.active} increase={increase} longRest={longRest.active}/> 		
        </div>
    )
}