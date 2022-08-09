import { configureStore } from '@reduxjs/toolkit'
import dialogReducer from './features/dialog/dialogSlice'
import squareReducer from './features/square/squareSlice'
import stepReducer from './features/step/stepSlice'


export default configureStore({
  reducer: {
    step: stepReducer ,
    square: squareReducer,
    dialog: dialogReducer
  },
})