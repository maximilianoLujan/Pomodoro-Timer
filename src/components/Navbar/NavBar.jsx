import ButtonConfig from './settings/ButtonConfig';
import ButtonLng from './lng/ButtonLng';
import ButtonRestart from './ButtonRestart';

export default function NavBar(){
    return(
        <header id='home' className="flex w-screen sm:w-full p-7 justify-between items-center relative z-40">
            <h1 className="text-xs sm:text-xl font-bold">Pomodoro Timer</h1>
            <div className='flex items-center'>
                <ButtonConfig />
                <ButtonRestart />
                <ButtonLng/>
            </div>
        </header>
    )
}