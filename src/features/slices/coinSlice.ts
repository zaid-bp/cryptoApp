import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk('coin/fetchData',async() => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/');
    return response.data;
})
interface coin{
    coinData:any;
    isLoading: boolean;
    isError: undefined | string
}
const initialState:coin={
    coinData: null,
    isLoading: true,
    isError: undefined,
}
const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(fetchData.fulfilled ,(state, action)=>{
            state.coinData = action.payload
            state.isLoading = false
        })
        .addCase(fetchData.rejected, (state, action)=>{
            state.isError = action.error.message
        })
    },
})

export default coinSlice.reducer