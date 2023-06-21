import { createSlice } from '@reduxjs/toolkit'
export const countSlice = createSlice({
  name: 'count',
  initialState: { value: 0 },
  reducers: {
    plus: state => {
      state.value += 1
    },
    minus: state => {
      state.value -= 1
    },
  },
})

export const { plus, minus } = countSlice.actions;
export default countSlice.reducer;