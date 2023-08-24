import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk('coin/fetchData',async() => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/');
    return response.data;
})

interface coin{
    theme:"material"|"dark";
    coinData:any;
    // trendingCoins:any;
    // isLoadingTrends:boolean;
    // trendError: undefined | string;
    isLoading: boolean;
    isError: undefined | string
}
const initialState:coin={
    theme:"dark",
    coinData: null,
    // trendingCoins: null,
    // isLoadingTrends:true,
    // trendError: undefined,
    isLoading: true,
    isError: undefined,
}
const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers:{
        changeTheme(state){
            if(state.theme==='material'){
                state.theme = "dark";
            }else{
                state.theme='material';
            }
        }
    },
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

export default coinSlice.reducer;
export const {changeTheme} = coinSlice.actions;