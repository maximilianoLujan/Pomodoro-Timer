import { createSlice } from '@reduxjs/toolkit'

export const configAlarmSlice = createSlice({
  name: 'configalarm',
  initialState: {
    value: {
        src:'sounds/nextel.mp3',
        volume:50
    }
  },
  reducers: {
    setConfigAlarm: (state,action) => {
        const newValue = {
            src:action.payload.sonido.sound,
            volume:action.payload.volumen
        }
        state.value = newValue
    }
  }
})

// Action creators are generated for each case reducer function
export const { setConfigAlarm } = configAlarmSlice.actions

export default configAlarmSlice.reducer