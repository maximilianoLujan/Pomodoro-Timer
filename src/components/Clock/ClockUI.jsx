import CounterClock from "./CounterClock"
import { useSelector } from "react-redux" 
import { useState } from "react"


export default function ClockUI(props){
    const value = useSelector(state => state.config.value)
    const {pomodoro,rest,longRest} = props
    const [clockRunning,setClockRunning] = useState(false)

    
    if (pomodoro) return(
        <div className="flex flex-col">
            <div className="mb-4">
                <CounterClock bg='#2563EB' time={value.focus} increase={props.increase} name={value.nivel} concentration={'focus'}/> 
            </div>
        </div>
    )
    if (rest) return(
        <div className="flex flex-col">
            <div className="mb-4">
               <CounterClock bg='#059669' time={value.recreo} increase={props.increase}  name={value.nivel} concentration={'recreo'}/> 
            </div>
        </div>
    )
    if (longRest) return(
        <div className="flex flex-col">
            <div className="mb-4">
                <CounterClock bg='#059669' time={value.breakLong} increase={props.increase} name={value.nivel} concentration={'breakLong'}/> 
            </div>
        </div>
    )
}