import React from 'react'
import GradButton from './GradButton'
import logo from '../Assests/Logo.png';
import instagram from '../Assests/instagram.png'
import Upwork from '../Assests/upwork.png';
import Meta from '../Assests/MetaLogo.png';
import Github from '../Assests/github.png';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="bg-transparent pt-16">
            <div className='flex flex-col  items-center text-center'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-12'>
                    <p className='text-primary font-semibold text-4xl '>Sound.</p>
                    <p className='text-primary font-semibold text-4xl'>Presence.</p>
                    <p className='text-primary font-semibold text-4xl '>Purpose.</p>
                </div>
                <div>
                    <p className='text-secondary font-light  leading-normal max-w-96 md:max-w-[1000px] text-base pt-6'>Focused on crafting immersive audio experiences.<br />
                        We believe sound should not just beheard—it should move you.
                    </p>
                </div>
                <div className='pt-8 pb-12 flex gap-4'>
                    <Link to="/compare"><GradButton variant="outlined">Aura Pro II</GradButton></Link>
                    <Link to="/compare"><GradButton variant="outlined">Flow II</GradButton></Link>
                </div>
            </div>


            <div className=' border-t border-gray-400 flex justify-between items-center px-12 py-8'>
                <div className='hidden md:block'>
                    <img className='w-32' src={logo} alt='logo' />
                </div>
                <div className='flex flex-col md:flex-row items-center px-5'>
                    <div>
                        <p className='text-primary text-sm tracking-wide mx-0 font-normal text-center mb-5 md:mb-0 md:mx-5'>© 2025 Resonance. All rights reserved./Amer Dakelbab</p>
                    </div>
                    <div className='flex gap-4'>
                        <a
                            href='https://www.instagram.com/amerdakelbab'
                            target='_blank'
                            rel='noopener noreferrer'
                            lang='en'
                        >
                            <img className='w-8 h-8 object-contain' src={instagram} alt='Instagram Logo' />
                        </a>

                        <a
                            href='https://github.com/AmerDakelbab'
                            target='_blank'
                            rel='noopener noreferrer'
                            lang='en'
                        >
                            <img className='w-8 h-8 object-contain' src={Github} alt='Github Logo' />
                        </a>

                        <a
                            href='https://www.upwork.com/freelancers/~01bec8117f8630b174?mp_source=share'
                            target='_blank'
                            rel='noopener noreferrer'
                            lang='en'
                        >
                            <img className='w-7 h-7 object-contain' src={Upwork} alt='Upwork Logo' />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer