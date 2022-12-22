import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import ModalLng from './ModalLng';


export default function ButtonLng({cerrar}){
    const [modal,setModal] = useState(false)
    const [t,i18n] = useTranslation("global")
    function handleClick(){
        setModal(!modal)
        cerrar()
    }
    return(
        <div className='relative'>
            <button onClick={() => handleClick() } className='flex items-center '>
                <LanguageIcon fontSize='medium'/>
                <p className='hidden sm:block'>{t("navbar.language")}</p>
            </button>
            {modal
            ?<ModalLng cerrar={handleClick}/>
            :null}
        </div>
    )
}