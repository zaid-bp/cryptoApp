import { configureStore } from "@reduxjs/toolkit";
import coinSlice from "./slices/coinSlice";
export const store = configureStore({
    reducer:{
        coin: coinSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>