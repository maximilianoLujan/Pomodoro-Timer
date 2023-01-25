import { useTranslation } from "react-i18next"

export default function Challenges(){
    const [t] = useTranslation("global")
    
    
    
    return(
        <div className="flex w-full flex-col md:flex-row md:w-3/4 mb-80">
            <h2 className="flex flex-col font-bold text-3xl text-center md:text-left">
                <span className="mb-2">{t("challenges.text1")}</span>
                <span className="mb-2 text-secondary">🎵 {t("challenges.text2")},</span>
                <span className="mb-2 text-primary">⏲️ {t("challenges.text3")},</span>
                <span className="mb-2 text-gray-600">✅ {t("challenges.text4")},</span>
                <span className=" text-gray-600">💬 {t("challenges.text5")}</span>
            </h2>
            <img className="md:w-96 md:h-60" src="https://pomodorotimer.online/_nuxt/img/winners.3ea2a12.webp" alt="grupo celebrando" />
        </div>
    )
}