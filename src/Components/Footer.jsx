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
            <div>
                <p className='text-primary font-bold text-4xl pt-12'> Sound.  Presence.  Purpose.</p>
            </div>
            <div>
                <p className='text-secondary font-semibold text-lg pt-6'>Focused on crafting immersive audio experiences.<br />
                We believe sound should not just be heard—it should move you.
                </p>
            </div>
            <div className='pt-8 pb-12 flex gap-4'>
                <GradButton variant="outlined">Aura Pro II</GradButton>
                <GradButton variant="outlined">Flow II</GradButton>
            </div>
            </div>


            <div className=' border-t border-gray-400 flex justify-between items-center px-12 py-8'>
                <div>
                    <img className='w-32' src={logo} alt='logo' />
                </div>
                <div className='flex items-center px-5'>
                    <div>
                        <p className='text-primary font-medium mx-5'>© 2025 Resonance. All rights reserved.</p>
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