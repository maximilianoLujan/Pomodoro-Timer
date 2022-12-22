import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModalConcentration from './modals/ModalConcentration';
import ModalAlarma from './modals/ModalAlarma';
import ModalInicio from './modals/ModalInicio';
import ModalNotificacion from './modals/ModalNotificacion';

export default function ModalConfig(){
    const [t,i18n] = useTranslation("global")
    const [modals,setModals] = useState({})

    function handleClick(category){
        setModals({category: category})
    }
    function back(){
        setModals({})
    }
    return(
        <div className="flex flex-col shadow-2xl p-3">
            <button onClick={() => handleClick("concentracion")} className='p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                <AccessTimeFilledIcon className='mx-4'/>
                <p className='mx-4'>{t("config.focus")}</p>
                <ArrowForwardIcon/>
            </button>
                {modals.category == "concentracion" ?<ModalConcentration back={back}/>:null}
            <button onClick={() => handleClick("alarma")} className='p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                <NotificationsIcon className='mx-4'/>
                <p className='mx-4'>{t("config.alarm")}</p>
                <ArrowForwardIcon/>
            </button>
                {modals.category == "alarma"?<ModalAlarma back={back}/>:null}
            <button onClick={() => handleClick("inicio")} className='p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                <RotateRightIcon className='mx-4'/>
                <p className='mx-4'>{t("config.start")}</p>
                <ArrowForwardIcon/>
            </button>
                {modals.category == "inicio"?<ModalInicio back={back}/>:null}
            <button onClick={() => handleClick("notificacion")} className='p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                <MarkChatUnreadIcon className='mx-4'/>
                <p className='mx-4'>{t("config.notification")}</p>
                <ArrowForwardIcon/>
            </button>
                {modals.category == "notificacion"?<ModalNotificacion back={back}/>:null}
        </div>
    )
}