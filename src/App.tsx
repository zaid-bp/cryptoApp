import './App.css';

import { Route, Routes } from "react-router-dom";
import CoinDetails from './Components/CoinDetails';
import Home from './Components/Home';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coindetail/:coinId' element={<CoinDetails/>}/>
    </Routes>
    </>
  )
}

export default App
