import ButtonConfig from './ButtonConfig';
import ButtonLng from './ButtonLng';
import ButtonRestart from './ButtonRestart';

export default function NavBar(){
    return(
        <div className="flex w-screen p-7 justify-between items-center">
            <h1 className="text-xl font-bold">Pomodoro Timer</h1>
            <div className='flex items-center'>
                <ButtonConfig/>
                <ButtonRestart/>
                <ButtonLng/>
            </div>
        </div>
    )
}