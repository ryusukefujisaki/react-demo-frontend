import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

interface PageMovingCounterState {
  value: number
}
const initialState: PageMovingCounterState = {
  value: 1
}

export const pageMovingCounterSlice = createSlice({
  name: 'pageMovingCounter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    }
  }
})

export const { increment } = pageMovingCounterSlice.actions
export const selectPageMovingCount = (state: RootState) => state.pageMovingCounter.value

export default pageMovingCounterSlice.reducer
