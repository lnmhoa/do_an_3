import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { faCny, faPenNib } from '@fortawesome/free-solid-svg-icons'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
