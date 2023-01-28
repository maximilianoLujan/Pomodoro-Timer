import { useState } from "react";
import { music } from "../../constants/music";

export default function Music(){
    const [menuVisible,setMenuVisible] = useState(false)
    const [playing,setPlaying] = useState(false)
    const [volumeoff,setVolumeOff] = useState(false)
    const [fullScreen,setFullScreen] = useState(false)
    const [volumen,setVolumen] = useState(100)


    const handleClickMenu = () => {
        setMenuVisible(!menuVisible)
    }

    const handleClickPlay = () => {
        setPlaying(!playing)
    }

    const handleClickBack = () => {
        console.log("Cancion Anterior")
    }

    const handleClickNext = () => {
        console.log("Cancion Siguiente")
    }

    const handleClickVolumeOff = () => {
        setVolumeOff(!volumeoff)
    }
    const handleClickFullScreen = () => {
        if(fullScreen){
            document.documentElement.requestFullscreen()
            setFullScreen(false)

        }else{
            document.exitFullscreen()
            setFullScreen(true)
        }
    }

    const handleChangeRange = (e) => {
        setVolumen(e.target.value)
    }

    return(
        <div className="w-full sticky bottom-0 bg-slate-100">
            {menuVisible &&
                <div className="flex flex-col">
                    <h2 className="align-left">Mixes</h2>
                    <div className="w-full flex">
                        {music.map(el => {
                            console.log(el)
                            return(
                                <div className="flex flex-col">
                                    <div></div>
                                    <p>{el.title}</p>
                                    <p>{el.songs.length} tracks</p>
                                </div>
                            )
                        })}
                    </div>
                </div>}
            <div className=" flex justify-between gap-2 md:gap-4">
                <div className="flex items-center h-10 gap-6">
                    <button className="w-6 h-6 ml-6" onClick={handleClickMenu}>
                        <svg className="w-6 h-6 pointer-events-none svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  data-v-42cab614="">
                            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" data-v-42cab614="" ></path>
                        </svg>
                    </button>
                    <button className="w-6 h-6" onClick={handleClickPlay}>
                        {playing
                        ?
                        <svg className="w-6 h-6 svg-inline--fa fa-pause fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"   data-v-42cab614="">
                            <path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" data-v-42cab614=""></path>
                        </svg>
                        :
                        <svg className="w-6 h-6 ml-1 svg-inline--fa fa-play fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  data-v-42cab614="">
                            <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" data-v-42cab614="" ></path>
                        </svg>}
                    </button>
                    <button onClick={handleClickBack} className="w-4 h-4 md:ml-4 text-gray-700">
                        <svg className="svg-inline--fa fa-step-backward fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="step-backward" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-42cab614="">
                            <path fill="currentColor" d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z" data-v-42cab614="" ></path>
                        </svg>
                    </button>
                    <button className="w-4 h-4 text-gray-700" onClick={handleClickNext}>
                        <svg className="svg-inline--fa fa-step-forward fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="step-forward" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  data-v-42cab614="">
                            <path fill="currentColor" d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z" data-v-42cab614="" ></path>
                        </svg>
                    </button>
                    <button className="w-6 h-6 text-gray-700" onClick={handleClickVolumeOff}>
                        <svg className="svg-inline--fa fa-volume-up fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  data-v-42cab614="">
                            <path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z" data-v-42cab614=""></path>
                        </svg>
                    </button>
                    <input min={0} max={100} defaultValue={volumen} onChange={handleChangeRange} type="range" name="" id="" />
                    <p className="text-black hidden md:block">Hola Mundo</p>
                </div>
                <div className="flex items-center h-10">
                    <button onClick={handleClickFullScreen} className="w-6 h-6 mr-6">
                        {!fullScreen?
                        <svg className="svg-inline--fa fa-compress-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="compress-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-42cab614="">
                            <path fill="currentColor" d="M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z" data-v-42cab614=""></path>
                        </svg>
                        
                        :
                        <svg className="svg-inline--fa fa-expand-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-42cab614="">
                            <path fill="currentColor" d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z" data-v-42cab614=""></path>
                        </svg>}
                    </button>
                </div>
            </div>

        </div>
    )
}