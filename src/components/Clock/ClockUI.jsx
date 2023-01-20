import { useTranslation } from "react-i18next"
import CounterClock from "./CounterClock"
import { useSelector } from "react-redux" 
export default function ClockUI(props){
    const value = useSelector(state => state.config.value)
    const {pomodoro,rest,longRest} = props

    
    if (pomodoro) return(
        <div className="flex flex-col">
            <div className="mb-4">
                <CounterClock bg='#2563EB' time={value.focus} name={value.nivel}/> 
            </div>
        </div>
    )
    if (rest) return(
        <div className="flex flex-col">
            <div className="mb-4">
               <CounterClock bg='#059669' time={value.recreo}  name={value.nivel}/> 
            </div>
        </div>
    )
    if (longRest) return(
        <div className="flex flex-col">
            <div className="mb-4">
                <CounterClock bg='#059669' time={value.breakLong} name={value.nivel}/> 
            </div>
        </div>
    )
}