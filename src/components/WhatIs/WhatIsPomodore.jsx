import { useTranslation } from "react-i18next"

export default function WhatIsPomodore(){
    const [t] = useTranslation("global")
    
    return(
    <div className="mb-80 md:w-4/5">
        <h2 className="font-bold text-center text-4xl mb-8 md:text-5xl md:mb-12">{t("whatis.question")}</h2>
        <div className="flex flex-col md:flex-row items-center">
            <div className="w-1/2">
                <img className="w-full" src="images/whatis.webp" alt="Chico estudiando" />
            </div>
            <div className="flex flex-col items-start px-4 md:w-1/2">
                <p className="text-lg text md:text-2xl ">
                    {t("whatis.whatis")}
                </p>
                <p className="text-lg text md:text-2xl  mb-6">
                    {t("whatis.how")}
                    <span className="text-primary">
                        {t("whatis.wordone")}
                    </span>
                    <span>
                        {t("whatis.and")}
                    </span>
                    <span className="text-secondary">
                        {t("whatis.wordtwo")}
                    </span>
                </p>
                <p className=" text-gray-400 text-md mb-4">
                    {t("whatis.grey")}
                </p>
                <div className="flex w-full text-primary ">
                    <a href="" target='_blank'>{t("whatis.howiuse")}</a> ➔
                </div>
            </div>
        </div>
    </div>
    )
} 