import React from 'react'
import Theme from './Theme'
import logo from "../../../public/cryptomartlogo.png";
function NavBar() {
  return (
    <>
    <header className='bg-[#32332e] sticky top-0 w-screen z-20 h-24 px-20 flex justify-between items-center'>
      <img src={logo} className='h-24 w-50' alt="Logo" />
    <Theme/>
    </header>
    </>
  )
}

export default NavBar