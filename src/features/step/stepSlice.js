import { createSlice } from '@reduxjs/toolkit'

export const stepSlice = createSlice({
  name: 'step',
  initialState: {
    list: Array(10).fill('')
  },
  reducers: {
    add: (state, action) => {
      state.list[state.list.findIndex(el => !el)] = action.payload
    },
    clear: state => {
      state.list = Array(10).fill('')
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, clear } = stepSlice.actions

export default stepSlice.reducer