import { useTranslation } from "react-i18next"

export default function WhoUse(){
    const [t] = useTranslation("global")


    return(
        <div className="bg-primary mb-80 w-full">
            <h2 className="font-bold text-center text-white text-2xl mb-8 md:text-5xl mt-24 md:mb-12">{t("whouse.title")}</h2>
            <div className="flex flex-col items-center md:flex-row px-6 mb-24">
                <div className="flex items-center justify-center w-1/2 mb-6">
                    <img className="w-full md:w-3/4 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg"  src="images/whouse.webp" alt="chicos celebrando" />
                </div>
                <div className="flex flex-col md:w-1/2">
                    <p className="text-white text-lg md:text-2xl mb-2">
                        {t("whouse.who")}
                    </p>
                    <p className="text-white text-lg md:text-2xl mb-6">
                        {t("whouse.whotwo")}
                        <span className="text-red-300">
                            {t("whouse.wordone")}
                        </span>
                        <span className="text-yellow-400">
                            {t("whouse.wordtwo")}
                        </span>
                        <span>
                            {t("whouse.and")}
                        </span>
                        <span className="text-yellow-400">
                            {t("whouse.wordthree")}
                        </span>
                        {t("whouse.whothree")}
                    </p>
                    <p className="text-white text-base md:text-xl mb-6">
                        {t("whouse.advice")}  💊
                    </p>
                </div>
            </div>
        </div>
    )
}