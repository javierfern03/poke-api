import { createSlice } from "@reduxjs/toolkit";

const nameTreainerSlice = createSlice({
  name: 'trainerName',
  initialState: '',
  reducers: {
    setNameTrainer: (state, action) => action.payload
  }
})

export default nameTreainerSlice.reducer
export const { setNameTrainer } = nameTreainerSlice.actions