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

export default function ModalConfig({bebe,medio,popular,extendido,changeChecked}){
    const [t,i18n] = useTranslation("global")
    const [modals,setModals] = useState({})
    const [config,setConfig] = useState(true)

    function handleClick(category){
        setModals({category: category})
        setConfig(!config)
    }
    function back(){
        setModals({})
        setConfig(true)
    }
    return(
        <div >
            {config
            ?<div className="flex flex-col shadow-2xl p-3 bg-slate-50">
                <button onClick={() => handleClick("concentracion")} className='py-4 sm:p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                    <AccessTimeFilledIcon className='mx-4'/>
                    <p className='sm:mx-4 font-bold'>{t("config.focus")}</p>
                    <ArrowForwardIcon/>
                </button>
                    
                <button onClick={() => handleClick("alarma")} className='py-4 sm:p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                    <NotificationsIcon className='mx-4'/>
                    <p className='sm:mx-4 font-bold'>{t("config.alarm")}</p>
                    <ArrowForwardIcon/>
                </button>
                    
                <button onClick={() => handleClick("inicio")} className='py-4 sm:p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                    <RotateRightIcon className='mx-4'/>
                    <p className='sm:mx-4 font-bold'>{t("config.start")}</p>
                    <ArrowForwardIcon/>
                </button>
                    
                <button onClick={() => handleClick("notificacion")} className='py-4 sm:p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                    <MarkChatUnreadIcon className='mx-4'/>
                    <p className='sm:mx-4 font-bold'>{t("config.notification")}</p>
                    <ArrowForwardIcon/>
                </button>
                    
            </div>
            :<div className="flex flex-col shadow-2xl p-3 w-full h-max">
                {modals.category == "concentracion" ?<ModalConcentration bebe={bebe} popular={popular} medio={medio} extendido={extendido} changeChecked={changeChecked} back={back}/>:null}
                {modals.category == "alarma"?<ModalAlarma back={back}/>:null}
                {modals.category == "inicio"?<ModalInicio back={back}/>:null}
                {modals.category == "notificacion"?<ModalNotificacion back={back}/>:null}
            </div>}
        </div>
    )
}