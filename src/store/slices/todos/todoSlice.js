import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  times: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { //estos son los llamados reducers
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload //puede ser un objeto o un valor
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

// export default counterSlice.reducer