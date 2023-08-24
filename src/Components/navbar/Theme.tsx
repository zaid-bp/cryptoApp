import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import { changeTheme } from '../../features/slices/coinSlice'
function Theme() {
    const theme = useSelector((state:RootState)=>state.coin.theme)
    const dispatch = useDispatch();
    
  return ( 
    <div onClick={()=>dispatch(changeTheme())} className={`bg-black w-60 rounded-full`}>
        <button className={`${theme!=='material'?'':'ease-in-out duration-500 translate-x-24'} bg-[#32332e] transition-all px-2 py-1 font-sans rounded-full text-white`}>{`Switch to ${theme}`}</button>
    </div>
  )
}

export default Theme