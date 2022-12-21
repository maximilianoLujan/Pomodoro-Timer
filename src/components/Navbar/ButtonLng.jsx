import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import ModalLng from './ModalLng';


export default function ButtonLng(){
    const [modal,setModal] = useState(false)
    const [t,i18n] = useTranslation("global")
    return(
        <div className='relative'>
            <button onClick={() => setModal(!modal) } className='flex items-center '>
                <LanguageIcon fontSize='medium'/>
                <p className='hidden sm:block'>{t("navbar.language")}</p>
            </button>
            {modal
            ?<ModalLng/>
            :null}
        </div>
    )
}