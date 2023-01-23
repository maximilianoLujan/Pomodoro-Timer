import TuneIcon from '@mui/icons-material/Tune';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalConfig from './ModalConfig';

export default function ButtonConfig(){
    const [t,i18n] = useTranslation("global")
    const [modal,setModal] = useState()
    const [bebe,setBebe] = useState(true)
    const [popular,setPopular] = useState(false)
    const [medio,setMedio] = useState(false)
    const [extendido,setExtendido] = useState(false)

    
    
    const changeChecked = (value) => {
        switch (value) {
            case 'bebe':
                setBebe(true)
                setPopular(false)
                setMedio(false)
                setExtendido(false)
                break;
            case 'popular':
                setBebe(false)
                setPopular(true)
                setMedio(false)
                setExtendido(false)
                break;
            case 'medio':
                setBebe(false)
                setPopular(false)
                setMedio(true)
                setExtendido(false)
                
                break;
            case 'extendido':
                setBebe(false)
                setPopular(false)
                setMedio(false)
                setExtendido(true)
                break;
        
            default:
                setBebe(true)
                setPopular(false)
                setMedio(false)
                setExtendido(false)
                break;
        }
    }
    
    return(
        <div className='mx-4 relative'>
            <button onClick={() => setModal(!modal) } className='flex items-center'>
                <TuneIcon fontSize='medium'/>
                <p className='hidden sm:block'>{t("navbar.customize")}</p>
            </button>
            {modal
            ?<div  className='absolute w-80' style={{left:'-12rem'}}>
                <ModalConfig bebe={bebe} popular={popular} medio={medio} extendido={extendido} changeChecked={changeChecked}/>
            </div>
            :null}
        </div>
    )
}