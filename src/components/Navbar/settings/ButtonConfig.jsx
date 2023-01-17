import TuneIcon from '@mui/icons-material/Tune';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalConfig from './ModalConfig';

export default function ButtonConfig(){
    const [t,i18n] = useTranslation("global")
    const [modal,setModal] = useState()


    return(
        <div className='mx-4 relative'>
            <button onClick={() => setModal(!modal) } className='flex items-center'>
                <TuneIcon fontSize='medium'/>
                <p className='hidden sm:block'>{t("navbar.customize")}</p>
            </button>
            {modal
            ?<div  className='absolute w-80' style={{left:'-12rem'}}>
                <ModalConfig/>
            </div>
            :null}
        </div>
    )
}