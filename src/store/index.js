import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from './slices/trainerName.slice'
import isLoading from "./slices/isLoading.slice";


const store =  configureStore({
  reducer: {
    nameTrainer,isLoading
  }
})

export default store