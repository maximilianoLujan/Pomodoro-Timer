export default function Arrow(props){
    const { direction , id , double} = props

    if (double == true){
        return(
            <a href={id}>
            <div  className={direction == 'top'
            ?"hidden h-16 w-16 rounded-full bg-slate-700 hover:bg-slate-800 cursor-pointer lg:flex absolute left-8"
            :"hidden h-16 w-16 rounded-full bg-slate-700 hover:bg-slate-800 cursor-pointer lg:flex absolute right-8"}>
                <p className="text-2xl font-extrabold text-white m-auto">⯭</p>
            </div>
        </a>
        )
    }



    return(
        <a href={id}>
            <div  className={direction == 'top'
            ?"hidden h-16 w-16 rounded-full bg-slate-700 hover:bg-slate-800 cursor-pointer lg:flex absolute left-8"
            :"hidden h-16 w-16 rounded-full bg-slate-700 hover:bg-slate-800 cursor-pointer lg:flex absolute right-8"}>
                {direction == 'top'
                ?
                <p className="text-2xl font-extrabold text-white m-auto">🡅</p>
                :
                <p className="text-2xl font-extrabold text-white m-auto">🡇</p>
                }
            </div>
        </a>
    )
}