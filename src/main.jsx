import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import global_pt from "./translations/pt/global.json"
import { Provider } from 'react-redux'
import store from "./app/store"
i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lng")?localStorage.getItem("lng"):"es",
  resources: {
    en:{global: global_en},
    es:{global: global_es},
    pt:{global: global_pt}
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)
