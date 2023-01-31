import { MotionPhotosAuto } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import Arrow from "../Arrow"



export default function Ask(){
    const [t] = useTranslation("global")
    const [how,setHow] = useState(false)
    const [whatdo,setWhatdo] = useState(false)
    const [download,setDownload] = useState(false)
    const [more,setMore] = useState(false)
    const [newVersion,setNewVersion] = useState(false)


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

    const handleClickNewVersion = () => {
        setNewVersion(true)
    }


    return(
        <div id="ask" className="w-screen sm:w-full bg-primary flex justify-center items-center relative py-44">
            <Arrow direction='top' id="#ciencia" />
            <div className="bg-primary w-full flex justify-center">
                <div className="w-5/6 sm:w-1/2">
                    <h2 className="font-bold text-white text-center text-4xl mb-8 md:text-5xl md:mb-12">{t("ask.title")}</h2>
                    <div className="w-full border-2 border-slate-400 rounded-lg my-4 borderb-0">
                        <section className="p-6 flex flex-col border-b-2 border-slate-400">
                            <div onClick={() => handleClickOpen('how')}  className="flex justify-between cursor-pointer">
                                <h2 className={how?"font-bold text-yellow-400 sm:text-2xl mb-6":"text-white font-bold sm:text-2xl"}>{t("ask.flip.title")}</h2>
                                <div>
                                    {how?<p className="text-gray-700">▲</p>:<p className="text-gray-700">▼</p>}
                                </div>
                                
                            </div>
                            {how  && <div className="w-full flex flex-col mt-6 text-white">
                                        <p>
                                            {t("ask.flip.infoone")}😉
                                        </p>
                                        <ol className="list-decimal list-inside mt-6">
                                            <li className="mb-4 marker:text-yellow-400 marker:text-lg ">{t("ask.flip.flipone")}</li>
                                            <li className="mb-4 marker:text-yellow-400 marker:text-lg ">{t("ask.flip.fliptwo")}</li>
                                            <li className="mb-4 marker:text-yellow-400 marker:text-lg ">{t("ask.flip.flipthree")}</li>
                                            <li className="mb-4 marker:text-yellow-400 marker:text-lg ">{t("ask.flip.flipfour")}</li>
                                            <li className="mb-4 marker:text-yellow-400 marker:text-lg ">{t("ask.flip.flipfive")}</li>
                                        </ol>
                                    </div>
                            }
                        </section>
                        <section className="p-6 flex flex-col border-b-2 border-slate-400">
                            <div onClick={() => handleClickOpen('whatdo')}  className={whatdo?"pb-8 borderb-2 border-black flex justify-between cursor-pointer":"flex justify-between cursor-pointer"}>
                                <h2 className={whatdo?"font-bold text-yellow-400 sm:text-2xl":"text-white font-bold sm:text-2xl"}>{t("ask.fliptwo.title")}</h2>
                                <div>
                                    {whatdo?<p className="text-gray-700">▲</p>:<p className="text-gray-700">▼</p>}
                                </div>

                            </div>
                            {whatdo && <div className="w-full flex flex-col text-white">
                                <p className="mb-6">{t("ask.fliptwo.infoone")}
                                    <span className="text-yellow-400">{t("ask.fliptwo.wordone")}</span>
                                </p>
                                <ol className="list-decimal list-inside before:text-yellow-400" >
                                    <li className="mb-4 md:text-xl marker:text-yellow-400 ">{t("ask.fliptwo.flipone")}</li>
                                    <li className="mb-4 md:text-xl marker:text-yellow-400 ">{t("ask.fliptwo.fliptwo")}</li>
                                    <li className="mb-4 md:text-xl marker:text-yellow-400 ">{t("ask.fliptwo.flipthree")}</li>
                                    <li className="mb-4 md:text-xl marker:text-yellow-400 ">{t("ask.fliptwo.flipfour")}</li>
                                    <li className="mb-4 md:text-xl marker:text-yellow-400 ">{t("ask.fliptwo.flipfive")}</li>
                                    <li className="mb-4 md:text-xl marker:text-yellow-400 ">{t("ask.fliptwo.flipsix")}</li>
                                    <li className="mb-4 md:text-xl marker:text-yellow-400 ">{t("ask.fliptwo.flipseven")}</li>
                                </ol>
                            </div>}

                        </section>
                        <section className="p-6 flex flex-col border-b-2 border-slate-400">
                            <div  onClick={() => handleClickOpen('download')} className="flex justify-between cursor-pointer">
                                <h2 className={download?"font-bold mb-6 text-yellow-400 sm:text-2xl":"text-white font-bold sm:text-2xl"}>{t("ask.flipthree.title")}</h2>
                                <div>
                                    {download?<p className="text-gray-700">▲</p>:<p className="text-gray-700">▼</p>}
                                </div>
                            </div>
                            {download && 
                            <div className="w-full flex flex-col text-white">
                                <p>{t("ask.flipthree.infoone")}</p>
                            </div>}
                        </section>
                        <section className="p-6 flex flex-col border-slate-400">
                            <div onClick={() => handleClickOpen('more')}  className="flex justify-between cursor-pointer">
                                <h2 className={more?"font-bold text-yellow-400 sm:text-2xl mb-6":"text-white font-bold sm:text-2xl"}>{t("ask.flipfour.title")}</h2>
                                <div>
                                    {more?<p className="text-gray-700">▲</p>:<p className="text-gray-700">▼</p>}
                                </div>
                            </div>
                            {more && <div className="w-full flex flex-col text-white mt-6">
                                        <p className="mb-6">{t("ask.flipfour.infoone")}</p>
                                        <ul className="list-disc  list-inside mb-6">
                                            <li className="marker:text-yellow-500 mb-6">{t("ask.flipfour.flipone")}</li>
                                            <li className="marker:text-yellow-500 mb-6">{t("ask.flipfour.fliptwo")}</li>
                                            <li className="marker:text-yellow-500 mb-6">{t("ask.flipfour.flipthree")}</li>
                                            <li className="marker:text-yellow-500 ">{t("ask.flipfour.flipfour")}</li>
                                        </ul>
                                        <p className="mb-8">{t("ask.flipfour.flipfive")}</p>
                                        <div>
                                            {newVersion
                                            ?<p className="text-yellow-500">{t("ask.newinfo")}👾</p>
                                            :<button onClick={handleClickNewVersion} className="w-full py-4 bg-yellow-500 rounded-md md:text-xl text-black hover:bg-yellow-600">{t("ask.flipfour.show")}</button>
                                            }
                                        </div>
                                    </div>}
                        </section>
                    </div>
                    <p className="text-white p-6 text-center">
                        {t("ask.inspired")}
                        <a className="underline underline-offset-1" href="https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro" target='_blank' rel='noopener'>{t("ask.technique")}</a>
                        {t("ask.developed")}
                        <a className="underline underline-offset-1" href="https://francescocirillo.com/" rel="noopener" target='_blank' >Francesco Cirillo.</a>
                    </p>
                    <div className="flex items-center justify-center">
                        <footer className="w-max flex flex-col items-center text-white">
                            <div className="flex mb-2">
                                <button className="mr-4">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-1 svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                                        <path className="w-6 h-6" fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" ></path>
                                    </svg>
                                        <p>Instagram</p>

                                </div>
                                </button>
                                    <button>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-1 svg-inline--fa fa-facebook fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                        <path className="w-6 h-6" fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" ></path>
                                    </svg>
                                        <p>Facebook</p>
                                </div>
                                    </button>
                            </div>
                            <small>© 2021 Pomodoro Timer Online</small>
                            <small>Terms | Policy</small>
                        </footer>
                    </div>
                </div>
            </div>
            <Arrow double={true} id='#home' />
        </div>
    )
}