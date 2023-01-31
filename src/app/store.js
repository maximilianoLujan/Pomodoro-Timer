import { configureStore } from '@reduxjs/toolkit'
import  configReducer  from "../features/config/configSlice"
import configAlarmReducer from '../features/configAlarm/configAlarm'
import runningReducer from '../features/running/running'

export default configureStore({
  reducer: {
    config: configReducer,
    alarm: configAlarmReducer,
    running:runningReducer
  }
})