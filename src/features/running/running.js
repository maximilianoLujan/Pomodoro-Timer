import { createSlice } from '@reduxjs/toolkit'
import { State } from 'howler'

export const runningSlice = createSlice({
  name: 'running',
  initialState: {
    value: {
        running: false
    }
  },
  reducers: {
    setTrue: (state) => {
        const newValue = {running: true}
        state.value = newValue
    },
    setFalse: (state) => {
        const newValue = {running: false}
        state.value = newValue
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFalse , setTrue } = runningSlice.actions

export default runningSlice.reducer