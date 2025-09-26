
import React, { useState } from 'react'
import Logo from '../Assests/Logo.png';
import GradButton from './GradButton';
import List from '../Assests/List.png'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>


      <div className='hidden  w-full md:flex justify-between items-center px-12 py-6 z-10 absolute top-0 '>
        <div>
          <img className='w-36' src={Logo} alt="logo" />
        </div>
        <div>
          <GradButton variant="text" >Home</GradButton>
          <GradButton variant="text" >Tech Specs</GradButton>
          <GradButton variant="primary" >Compare</GradButton>
        </div>
      </div>

      <div>
        <div className=' w-full flex md:hidden justify-between items-center px-6 py-4 z-20 absolute top-0 '>
          <div>
           <Link to='/'>
            <img className='w-28' src={Logo} alt="logo" />
           </Link> 
          </div>
          <div>
            <Button className='border-none bg-transparent shadow-none' onClick={() => setIsOpen(!isOpen)}>
              <img className='w-7 mt-1 object-contain h-7' src={List} alt='list' />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='z-50 bg-white fixed top-0 right-0 w-1/2 h-screen'>
          <div className='flex py-16  flex-col items-center'>
            <Link to='/'><GradButton variant="text" >Home</GradButton></Link>
            <Link to='/tech-specs'><GradButton variant="text" >Tech Specs</GradButton></Link>
            <Link to='/compare'><GradButton variant="primary" >Compare</GradButton></Link>
          </div>
        </div>

      )}

    </div>
  )
}

export default Header