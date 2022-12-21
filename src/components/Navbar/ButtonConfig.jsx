import TuneIcon from '@mui/icons-material/Tune';
import { useTranslation } from 'react-i18next';


export default function ButtonConfig(){
    const [t,i18n] = useTranslation("global")
    return(
        <div>
            <button className='flex items-center'>
                <TuneIcon fontSize='medium'/>
                <p className='hidden sm:block'>{t("navbar.customize")}</p>
            </button>
        </div>
    )
}