import './App.css'
import { useEffect } from 'react'
import { fetchData, fetchTrendings } from './features/slices/coinSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './features/store'
import ListCoins from './Components/listCoins'
import CoinCard from './Components/coins'

function App() {
const {isLoadingCoins, isError} = useSelector((state:RootState)=>state.coin)
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchData() as any)
  dispatch(fetchTrendings() as any)
},[dispatch])
if(isLoadingCoins){
  return <p>Loading...</p>
}
if(isError){
  return <p>{isError}</p>
}
  return (
    <>
    <CoinCard /> 
    <ListCoins />
    </>
  )
}

export default App
