import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useTranslation } from 'react-i18next';


export default function ButtonRestart(){
    const [t,i18n] = useTranslation("global")
    return(
    <button className='flex items-center '>
        <RestartAltIcon fontSize='medium'/>
        <p className='hidden sm:block'>{t("navbar.restart")}</p>
    </button>)
}