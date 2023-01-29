import { useState } from "react"


export default function Track(props){
    const [playing,setPlaying] = useState(false)
    const { title,
        img ,
        songs,
        volumen,
        play,
        handleClickPlay } = props


    
    return(
        <div style={{backgroundColor:'rgba(30,41,59,var(--tw-bg-opacity)',boxShadow:'0 -5px 13px rgb(0 0 0 / 10%)'}} className="p-4 rounded-xl flex flex-col">
            <div className="w-32 h-32 relative">
                <img src={`${img}`} alt={`${title}`} />
                <div className="opacity-0 absolute top-0 w-full h-full flex items-center justify-center bg-black hover:opacity-50">
                    {play?
                        <svg onClick={handleClickPlay} className="cursor-pointer opacity-100 text-white w-16 svg-inline--fa fa-pause fa-w-14" data-v-ed30217a="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                            <path onClick={handleClickPlay} data-v-ed30217a="" fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path>
                        </svg>
                    :<svg onClick={handleClickPlay}  className="cursor-pointer opacity-100 text-white w-16 ml-1 svg-inline--fa fa-play fa-w-14" data-v-ed30217a="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                        <path onClick={handleClickPlay} data-v-ed30217a="" fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                    </svg>}
                </div>
            </div>
            <p className="text-white mb-2 mt-4">{title}</p>
            <p className="text-white font-semibold">{songs.length} tracks</p>
        </div>
    )
}