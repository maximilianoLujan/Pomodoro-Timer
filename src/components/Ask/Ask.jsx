import { MotionPhotosAuto } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useState } from "react"
//▲
//▼

export default function Ask(){
    const [t] = useTranslation("global")
    const [how,setHow] = useState(false)
    const [whatdo,setWhatdo] = useState(false)
    const [download,setDownload] = useState(false)
    const [more,setMore] = useState(false)


    const handleClickOpen = (name) => {
    switch (name) {
        case 'how':
            setHow(!how)
            setWhatdo(false)
            setDownload(false)
            setMore(false)
            break;
        case 'whatdo':
            setHow(false)
            setWhatdo(!whatdo)
            setDownload(false)
            setMore(false)
            break;
        case 'download':
            setHow(false)
            setWhatdo(false)
            setDownload(!download)
            setMore(false)
            
            break;
        case 'more':
            setHow(false)
            setWhatdo(false)
            setDownload(false)
            setMore(!more)
            
            break;
        
        default:
            break;
}

    }


    return(
        <div className="bg-primary w-full flex justify-center">
            <div className="w-4/5 sm:w-1/2 my-24">
                <h2 className="font-bold text-white text-center text-4xl mb-8 md:text-5xl md:mb-12">{t("ask.title")}</h2>
                <div className="w-full border-2 border-slate-400 rounded-lg m-4 borderb-0">
                    <section className="p-6 flex flex-col border-b-2 border-slate-400">
                        <div onClick={() => handleClickOpen('how')}  className="flex justify-between cursor-pointer">
                            <h2 className={how?"font-bold text-yellow-400 sm:text-2xl":"text-white font-bold sm:text-2xl"}>{t("ask.flip.title")}</h2>
                            <div>
                                {how?<p>▲</p>:<p>▼</p>}
                            </div>
                            
                        </div>
                        {how  && <div className="w-full flex flex-col text-white">
                                    <p>
                                        {t("ask.flip.infoone")}😉
                                    </p>
                                    <ol className="list-decimal list-inside">
                                        <li>{t("ask.flip.flipone")}</li>
                                        <li>{t("ask.flip.fliptwo")}</li>
                                        <li>{t("ask.flip.flipthree")}</li>
                                        <li>{t("ask.flip.flipfour")}</li>
                                        <li>{t("ask.flip.flipfive")}</li>
                                    </ol>
                                </div>
                        }
                    </section>
                    <section className="p-6 flex flex-col border-b-2 border-slate-400">
                        <div onClick={() => handleClickOpen('whatdo')}  className={whatdo?"pb-8 borderb-2 border-black flex justify-between cursor-pointer":"flex justify-between cursor-pointer"}>
                            <h2 className={whatdo?"font-bold text-yellow-400 sm:text-2xl":"text-white font-bold sm:text-2xl"}>{t("ask.fliptwo.title")}</h2>
                            <div>
                                {whatdo?<p>▲</p>:<p>▼</p>}
                            </div>

                        </div>
                        {whatdo && <div className="w-full flex flex-col text-white">
                            <p className="mb-6">{t("ask.fliptwo.infoone")}
                                <span className="text-yellow-400">{t("ask.fliptwo.wordone")}</span>
                            </p>
                            <ol className="list-decimal list-inside" >
                                <li className="mb-2 md:text-xl decoration-yellow-400">{t("ask.fliptwo.flipone")}</li>
                                <li className="mb-2 md:text-xl decoration-yellow-400">{t("ask.fliptwo.fliptwo")}</li>
                                <li className="mb-2 md:text-xl decoration-yellow-400">{t("ask.fliptwo.flipthree")}</li>
                                <li className="mb-2 md:text-xl decoration-yellow-400">{t("ask.fliptwo.flipfour")}</li>
                                <li className="mb-2 md:text-xl decoration-yellow-400">{t("ask.fliptwo.flipfive")}</li>
                                <li className="mb-2 md:text-xl decoration-yellow-400">{t("ask.fliptwo.flipsix")}</li>
                                <li>{t("ask.fliptwo.flipseven")}</li>
                            </ol>
                        </div>}

                    </section>
                    <section className="p-6 flex flex-col border-b-2 border-slate-400">
                        <div  onClick={() => handleClickOpen('download')} className="flex justify-between cursor-pointer">
                            <h2 className={download?"font-bold text-yellow-400 sm:text-2xl":"text-white font-bold sm:text-2xl"}>{t("ask.flipthree.title")}</h2>
                            <div>
                                {download?<p>▲</p>:<p>▼</p>}
                            </div>
                        </div>
                        {download && 
                        <div className="w-full flex flex-col text-white">
                            <p>{t("ask.flipthree.infoone")}</p>
                        </div>}
                    </section>
                    <section className="p-6 flex flex-col border-slate-400">
                        <div onClick={() => handleClickOpen('more')}  className="flex justify-between cursor-pointer">
                            <h2 className={more?"font-bold text-yellow-400 sm:text-2xl":"text-white font-bold sm:text-2xl"}>{t("ask.flipfour.title")}</h2>
                            <div>
                                {more?<p>▲</p>:<p>▼</p>}
                            </div>
                        </div>
                        {more && <div className="w-full flex flex-col text-white">
                                    <p>{t("ask.flipfour.infoone")}</p>
                                    <ul className="list-disc  list-inside">
                                        <li>{t("ask.flipfour.flipone")}</li>
                                        <li>{t("ask.flipfour.fliptwo")}</li>
                                        <li>{t("ask.flipfour.flipthree")}</li>
                                        <li>{t("ask.flipfour.flipfour")}</li>
                                    </ul>
                                    <p>{t("ask.flipfour.flipfive")}</p>
                                    <div>
                                        <button>{t("ask.flipfour.show")}</button>
                                    </div>
                                </div>}
                    </section>
                </div>
            </div>
        </div>
    )
}