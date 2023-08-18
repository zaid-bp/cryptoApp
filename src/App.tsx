import './App.css'
import { useEffect } from 'react'
import { fetchData } from './features/slices/coinSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './features/store'
import CoinCard from './Components/coins'

function App() {
const {isLoading, isError} = useSelector((state:RootState)=>state.coin)
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchData() as any)
},[dispatch])
if(isLoading){
  return <p>Loading...</p>
}
if(isError){
  return <p>{isError}</p>
}
  return (
    <>
    <CoinCard /> 
    </>
  )
}

export default App
