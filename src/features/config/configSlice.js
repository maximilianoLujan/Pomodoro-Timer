import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
  name: 'config',
  initialState: {
    value: {
        focus:10,
        recreo:5,
        breakLong:10
    }
  },
  reducers: {
    setValues: (state,action) => { 
        const newState = {...action.payload}
        state.value = newState
    }
  }
})

// Action creators are generated for each case reducer function
export const { setValues } = configSlice.actions

export default configSlice.reducer