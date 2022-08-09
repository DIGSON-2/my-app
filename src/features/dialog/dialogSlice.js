import { createSlice } from '@reduxjs/toolkit'

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    status: true
  },
  reducers: {
    changeStatus: state => {
      state.status = !state.status
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeStatus } = dialogSlice.actions

export default dialogSlice.reducer