import { useTranslation } from "react-i18next"


export default function Cience(){
    const [t] = useTranslation("global")
    return (
        <div className="mb-80 md:w-4/5">
            <h2 className="font-bold text-center text-4xl mb-8 md:text-5xl md:mb-12">{t("cience.title")}</h2>
            <div className="flex flex-col items-center md:flex-row p-6">
                <div className="w-1/2">
                    <img className="w-full" src="images/cience.webp" alt="cientifico" />
                </div>
                <div className="flex flex-col md:w-1/2">
                    <p className="mb-4 md:text-2xl">
                        {t("cience.cienceword")}
                        <span className="text-primary">{t("cience.ciencewordtwo")}</span>
                        {t("cience.ciencewordthree")}
                    </p>
                    <p className="mb-8 md:text-xl">
                        {t("cience.ciencewordfour")}
                    </p>
                    <p className="text-gray-400 text-base md:text-xl cursor-pointer">
                        {t("cience.ciencewordfive")}
                        <span className="text-primary">
                            {t("cience.ciencewordsix")} ➔
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}