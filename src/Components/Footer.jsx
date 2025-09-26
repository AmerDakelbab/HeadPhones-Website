import React from 'react'
import GradButton from './GradButton'
import logo from '../Assests/Logo.png';
import Discord from '../Assests/DiscordLogo.png';
import X from '../Assests/XLogo.png';
import Meta from '../Assests/MetaLogo.png';
function Footer() {
    return (
        <div className="bg-gradient-to-b from-[#F5F5F5] to-[#D2CDC6] pt-12">
            <div className='flex flex-col  items-center text-center'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-12'>
                <p className='text-primary font-semibold text-4xl '>Sound.</p>
                <p className='text-primary font-semibold text-4xl'>Presence.</p>
                <p className='text-primary font-semibold text-4xl '>Purpose.</p>
            </div>
            <div>
                <p className='text-secondary font-light text-base pt-6'>Focused on crafting immersive<br /> audio experiences.<br />
                We believe sound should not just be<br /> heard—it should move you.
                </p>
            </div>
            <div className='pt-8 pb-12 flex gap-4'>
                <GradButton variant="outlined">Aura Pro II</GradButton>
                <GradButton variant="outlined">Flow II</GradButton>
            </div>
            </div>


            <div className=' border-t border-gray-400 flex justify-between items-center px-12 py-8'>
                <div className='hidden md:block'>
                    <img className='w-32' src={logo} alt='logo' />
                </div>
                <div className='flex flex-col md:flex-row items-center px-5'>
                    <div>
                        <p className='text-primary text-sm tracking-wide mx-0 font-normal mb-5 md:mb-0 md:mx-5'>© 2025 Resonance. All rights reserved.</p>
                    </div>
                    <div className='flex gap-4'>
                        <img className='w-6' src={Discord} alt='Discord Logo' />
                        <img className='w-6' src={X} alt='X Logo' />
                        <img className='w-6' src={Meta} alt='Meta Logo' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer