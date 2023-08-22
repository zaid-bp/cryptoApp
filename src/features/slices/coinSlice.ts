import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk('coin/fetchData',async() => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/');
    return response.data;
})
export const fetchTrendings = async() => {
    const response2 = await fetch('https://api.coingecko.com/api/v3/search/trending/');
    const trendData = await response2
    return trendData.json;
    // console.log(response2 +"in hte col");
}
interface coin{
    coinData:any;
    trendingCoins:any;
    isLoadingTrends:boolean;
    trendError: undefined | string;
    isLoadingCoins: boolean;
    isError: undefined | string
}
const initialState:coin={
    coinData: null,
    trendingCoins: null,
    isLoadingTrends:true,
    trendError: undefined,
    isLoadingCoins: true,
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
            state.isLoadingCoins = false
        })
        .addCase(fetchData.rejected, (state, action)=>{
            state.isError = action.error.message
        })
        // .addCase(fetchTrendings.fulfilled,(state, action)=>{
        //     state.trendingCoins = action.payload;
        //     state.isLoadingTrends = false;
        // })
        // .addCase(fetchTrendings.rejected, (state, action)=>{
        //     state.trendError = action.error.message
        // })
    },
})

export default coinSlice.reducer