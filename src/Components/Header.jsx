
import React from 'react'
import Logo from '../Assests/Logo.png';
import GradButton from './GradButton';
function Header() {
  return (
    <div className='w-full flex justify-between items-center px-12 py-6 z-10 absolute top-0 '>
        <div>
            <img className='w-36' src={Logo} alt="logo" />
        </div>
        <div>
            <GradButton variant="text" >Home</GradButton>
            <GradButton variant="text" >Tech Specs</GradButton>
            <GradButton variant="primary" >Compare</GradButton>
        </div>
    </div>
  )
}

export default Header