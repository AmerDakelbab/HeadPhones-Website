import React from 'react'
import Header from '../Components/Header'
import HeadPhoneG from '../Assests/headphonesG.png';
import FeatureBlock from '../Components/FeatureBlock';
import Footer from '../Components/Footer';

function TechSpecs() {
  return (
    <div className='font-poppins  h-screen bg-gray-100'>

      <Header />


      <div className='pt-36'>
        <p className=' px-5 md:px-32 text-3xl md:text-4xl text-primary font-semibold'>Color</p>
      </div>

      <div className="flex flex-col px-5 md:px-32 -mt-6 pb-24  items-center">
        <div>
          <img src={HeadPhoneG} alt="Headphone Yellow" />
        </div>
        <div className="flex gap-8">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellowish shadow-md hover:scale-110 transition" />
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-greenish border border-gray-800 shadow-md hover:scale-110 transition" />
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-reddish shadow-md hover:scale-110 transition" />
        </div>
      </div>


      <div className='bg-gray-100'>
        <FeatureBlock
          title={<>Audio<br />Technology</>}
          description={
            <>
              Custom-tuned 40mm Resonance™ drivers for deep bass.<br />
              Ultra-low distortion signal processing.<br />
              Adaptive Sound Sculpting™ — real-time EQ.<br />
              Spatial Audio Calibration with dynamic head tracking.<br />
              Natural Voice Isolation for calls, focus, and immersive listening.<br />
              Pressure-balancing acoustic vents for long-wear comfort.
            </>
          }
        />
        <FeatureBlock
          title="Intelligence"
          description={
            <>
              Dual noise-targeting microphones.<br />
              Internal ear-position mic for personalized audio tuning.<br />
              Proximity & motion sensors to detect wear and usage.<br />
              Gesture-aware force sensor for effortless control.<br />
              Accelerometer-assisted voice capture for clarity on the move.<br />
            </>
          }
        />
        <FeatureBlock
          title="Power"
          description={
            <>
              Custom-designed <span className='text-primary font-semibold'>R2 Sound Core</span> chip.<br />
              Advanced audio algorithms tuned for emotional clarity.<br />
              Onboard neural audio engine for Spatial Audio and Adaptive EQ.<br />
            </>
          }
        />
        <FeatureBlock
          title="Controls"
          description={
            <>
              Tap once to play/pause or answer a call.<br />
              Tap twice to skip forward or end a call.<br />
              Tap three times to rewind.<br />
              Press and hold to access voice assistant.<br />
              Automatic mute when removed, smart resume when worn.<br />
            </>
          }
        />
        <FeatureBlock
          title={<>Built for The<br />Elements</>}
          description={
            <>
              Rated <span className='text-primary font-semibold'>IPX4</span> for sweat and weather resistance.<br />
              Designed for long sessions, light activity, or relaxed stillness.<br />
            </>
          }
        />
        <FeatureBlock
          title="Battery"
          description={
            <>
              Up to<span className='text-primary font-semibold'> 36 hours</span> total listening time with case.<br />
              Up to <span className='text-primary font-semibold'>6.5 hours</span> on a single charge.<br />
              Fast charge: <span className='text-primary font-semibold'>10 minutes = 2 hours</span> of play.<br />
              USB-C charging + Qi-compatible wireless charging.<br />
              LED status light + Find My compatible tone alert.<br />
            </>
          }
        />
        <FeatureBlock
          title="Connectivity"
          description={
            <>
              Bluetooth® 5.3 low-latency audio.<br />
              Multipoint connection with auto handoff.<br />
              Seamless pairing across all your devices.<br />
            </>
          }
        />
        <FeatureBlock
          title="Materials"
          description={
            <>
              100% recycled aluminum in internal frames.<br />
              Bio-based mesh ear padding.<br />
              Rare earth magnets sourced from reclaimed materials.<br />
              Plastic-free, fiber-based packaging.<br />
              Assembled in Zero Waste-certified facilities.<br />
            </>
          }
        />
        <FeatureBlock
          title={<>Sustainability&<br />Materials</>}
          description={
            <>
              100% recycled aluminum in internal frames.<br />
              Bio-based mesh ear padding.<br />
              Rare earth magnets sourced from reclaimed materials.<br />
              Plastic-free, fiber-based packaging.<br />
              Assembled in Zero Waste-certified facilities.<br />
            </>
          }
        />
      </div>

      <Footer />
    </div>
  )
}

export default TechSpecs