import './App.css';

import { Route, Routes } from "react-router-dom";
import CoinDetails from './Components/CoinDetails';
import Home from './Components/Home';
import { useSelector } from 'react-redux';
import {RootState} from "./features/store";
function App() {
  const theme = useSelector((state:RootState)=>state.coin.theme)

  return (
    <div className={`${theme==='material'?'filter invert':'filter invert-0'} transition-all duration-300 ease-in-out`}>
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coindetail/:coinId' element={<CoinDetails/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App
