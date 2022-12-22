import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ModalConfig(){
    const [t,i18n] = useTranslation("global")
    return(
        <div className="flex flex-col shadow-2xl">
            <button className='p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                <AccessTimeFilledIcon className='mx-4'/>
                <p className='mx-4'>{t("config.focus")}</p>
                <ArrowForwardIcon/>
            </button>
            <button className='p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                <NotificationsIcon className='mx-4'/>
                <p className='mx-4'>{t("config.alarm")}</p>
                <ArrowForwardIcon/>
            </button>
            <button className='p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                <RotateRightIcon className='mx-4'/>
                <p className='mx-4'>{t("config.start")}</p>
                <ArrowForwardIcon/>
            </button>
            <button className='p-4 flex justify-between cursor-pointer hover:bg-sky-500 hover:text-sky-100'>
                <MarkChatUnreadIcon className='mx-4'/>
                <p className='mx-4'>{t("config.notification")}</p>
                <ArrowForwardIcon/>
            </button>
        </div>
    )
}