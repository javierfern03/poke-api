import { createSlice } from "@reduxjs/toolkit";

const isloadingSlice = createSlice({
  name: 'loadingIs',
  initialState: false,
  reducers: {
    setIsLoading: state => !state
  }
})

export default isloadingSlice.reducer
export const {setIsLoading} = isloadingSlice.actions