import { configureStore } from '@reduxjs/toolkit'
import  configReducer  from "../features/config/configSlice"
import configAlarmReducer from '../features/configAlarm/configAlarm'


export default configureStore({
  reducer: {
    config: configReducer,
    alarm: configAlarmReducer
  }
})