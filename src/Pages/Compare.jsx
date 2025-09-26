import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import GradButton from '../Components/GradButton'
import Headphonee from '../Assests/headphonesG.png'
import Cpu from '../Assests/Cpu.png'
import Speaker from '../Assests/SpeakerSimpleSlash.png'
import Usersound from '../Assests/UserSound.png'
import Equalizer from '../Assests/Equalizer.png'
import Ear from '../Assests/Ear.png'
import HandTap from '../Assests/HandTap.png'
import Battery from '../Assests/BatteryCharging.png'
import Drop from '../Assests/Drop.png'
import Microphone from '../Assests/Microphone.png'
import Minus from '../Assests/Minus.png'
import HeadPhonesFlow from '../Assests/HeadPhonesFlow.png'

const HeadPhonesfeatures = [
    { id: 1, img: Cpu, text: 'R1 Chip' },
    { id: 2, img: Speaker, text: '2x more Active Noise Cancellation' },
    { id: 3, img: Usersound, text: 'Personalized Spatial Audio' },
    { id: 4, img: Equalizer, text: 'Lossless Audio' },
    { id: 5, img: Minus, text: 'None' },
    { id: 6, img: Minus, text: 'None' },
    { id: 7, img: Battery, text: 'Up to 17 hours of listening' },
    { id: 8, img: Minus, text: 'None' },
    { id: 9, img: Microphone, text: '5 microphones total' },
];
const Flowfeatures = [
    { id: 1, img: Cpu, text: 'R2 Chip' },
    { id: 2, img: Speaker, text: 'Active Noise Cancellation' },
    { id: 3, img: Usersound, text: 'Personalized Spatial Audio' },
    { id: 4, img: Minus, text: 'None' },
    { id: 5, img: Ear, text: 'Hearing Test and Hearing Protection' },
    { id: 6, img: HandTap, text: 'Touch sensor' },
    { id: 7, img: Battery, text: 'Up to 6 hours of listening' },
    { id: 8, img: Drop, text: 'Water resistant' },
    { id: 9, img: Microphone, text: 'Dual beamforming microphones' },
];

function Compare() {
    return (
        <div className='min-h-screen flex flex-col pt-16 font-poppins  bg-gradient-to-b from-[#F5F5F5] to-[#D2CDC6]'>
            <Header />

            <div className='flex flex-col items-center text-center mt-12 md:mt-20'>
                <p className='text-primary leading-snug md:leading-none font-semibold text-5xl'>Compare Resonance Models</p>
                <p className='text-secondary font-normal text-lg md:text-xl mt-4'>Get help choosing. Chat with a Specialist.</p>
            </div>

            <div className='flex flex-row justify-center md:gap-4 mt-8 px-8 md:mb-16'>
                {/* HeadPhone Section */}
                <div className='w-[250px] md:w-[400px] bg-white p-4 rounded-l-2xl rounded-bl-2xl md:rounded-2xl '>
                    <div className='flex flex-col items-center md:p-5 rounded-xl mb-5 md:bg-gray-200'>
                        <p className='text-primary text-xl md:text-3xl font-bold'>Aura Pro II</p>
                        <img className='w-64 object-contain' src={Headphonee} />
                        <p className='text-secondary text-sm mb-4'>Starting at $320</p>
                        <GradButton variant="primary">Buy Now</GradButton>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        {HeadPhonesfeatures.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex flex-col items-center  h-24 "
                            >
                                <img className="w-6 h-6 mb-2" src={feature.img} alt={feature.text} />
                                <p className="text-secondary max-w-36 md:max-w-96 text-sm">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EarPhones Section */}
                <div className='w-[250px] md:w-[400px] rounded-r-2xl rounded-br-2xl bg-white p-4 md:rounded-2xl'>
                    <div className='flex flex-col items-center md:p-5 rounded-xl mb-5 md:bg-gray-200'>
                        <p className='text-primary text-xl md:text-3xl font-bold'>Flow II</p>
                        <img className='w-64 object-contain' src={HeadPhonesFlow} />
                        <p className='text-secondary text-sm mb-4'>Starting at $160</p>
                        <GradButton variant="primary">Buy Now</GradButton>
                    </div>
                    <div className="flex flex-col items-center">
                        {Flowfeatures.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex flex-col items-center text-center  h-24"
                            >
                                <img className="w-6 h-6 mb-2" src={feature.img} alt={feature.text} />
                                <p className="text-secondary max-w-36 md:max-w-96 text-sm">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default Compare