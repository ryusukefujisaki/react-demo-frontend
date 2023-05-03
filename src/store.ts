import { configureStore } from '@reduxjs/toolkit'
import pageMovingCounterReducer from '@/features/pageMovingCounter/pageMovingCounterSlice'

const store = configureStore({
  reducer: {
    pageMovingCounter: pageMovingCounterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
