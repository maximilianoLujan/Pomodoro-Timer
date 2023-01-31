import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useTranslation } from 'react-i18next';


export default function ButtonRestart(){

    
    const handleClickRestart = () => {
        const restart = confirm("Se eliminaran todas sus listas de tareas y progresos de contadores. ¿Estas seguro/a de continuar?")
        restart?location.reload() :null
    }

    const [t,i18n] = useTranslation("global")
    return(
    <button onClick={handleClickRestart} className='flex items-center sm:mx-4'>
        <RestartAltIcon fontSize='medium'/>
        <p className='hidden sm:block'>{t("navbar.restart")}</p>
    </button>)
}