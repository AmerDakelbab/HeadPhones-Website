import React from 'react'
import GradButton from '../Components/GradButton';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import featureImage from '../Assests/feature Image.png';
import square1 from '../Assests/HeadPhone Detail 1.png';
import square2 from '../Assests/HeadPhone Detail 2.png';
import square3 from '../Assests/HeadPhone Detail 3.png';
import square4 from '../Assests/HeadPhoner Detail 4.png';
import square5 from '../Assests/HeadPhone Detail 5.png';
import square6 from '../Assests/HeadPhone Detail 6.png';
import brochure1 from '../Assests/Brochure 1.png';
import brochure2 from '../Assests/Brochure 2.png';
import brochure3 from '../Assests/Brochure 3.png';
import HeadphoneImage from '../Assests/Headphone Image.png';
import HeadPhoneW from '../Assests/headphonesW.png';
import HeadPhoneR from '../Assests/headphonesR.png';
import HeadPhoneC from '../Assests/headphonesC.png';
import HeadPhoneY from '../Assests/headphonesY.png';
import HeadPhoneG from '../Assests/headphonesG.png';
import HeadPhoneP from '../Assests/headphonesP.png';


const detailsData = [
  { id: 1, image: square1, alt: 'square1' },
  { id: 2, image: square2, alt: 'square2' },
  { id: 3, image: square3, alt: 'square3' },
  { id: 4, image: square4, alt: 'square4' },
  { id: 5, image: square6, alt: 'square6' },
  { id: 5, image: square5, alt: 'square5' },
]
function Home() {
  return (
    <div className='font-poppins'>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center  relative bg-gradient-to-b from-[#F5F5F5] to-[#E7E3DD]">
        <p className="absolute top-48 text-9xl text-primary font-extrabold tracking-wider z-20">
          Resonance
        </p>
        <img
          src={HeadphoneImage}
          alt="Headphone"
          className="relative z-10 w-full max-w-3xl object-contain"
        />
        <p className="absolute bottom-80 text-9xl font-bold text-secondary tracking-wider z-0">
          Aura Pro II
        </p>
      </div>

      {/* Colors Section */}
      <div className="flex flex-col items-center text-center px-12 pt-16 pb-16 bg-gradient-to-b from-[#E7E3DD] to-[#D2CDC6]">
        <div>
          <p className="text-5xl text-primary font-semibold">Your Style. Your Sound.</p>
          <p className="text-2xl py-8 text-secondary">
            Studio-grade acoustics that dissolve distractions and awaken clarity.
          </p>
        </div>

        <div className="flex gap-8 justify-center items-center">
          <img className="h-96 blur-sm" src={HeadPhoneY} alt="Headphone" />
          <img className="h-[28rem]" src={HeadPhoneG} alt="Headphone" /> 
          <img className="h-96 blur-sm" src={HeadPhoneR} alt="Headphone" />
        </div>

        <div className="flex gap-8 py-8">
          <div className="w-10 h-10 rounded-full bg-yellowish shadow-md hover:scale-110 transition" />
          <div className="w-10 h-10 rounded-full bg-greenish border border-gray-800 shadow-md hover:scale-110 transition" />
          <div className="w-10 h-10 rounded-full bg-reddish shadow-md hover:scale-110 transition" />
        </div>

        <p className="text-lg text-secondary">Choose a color that fits your flow.</p>
      </div>

      {/* Brochures Section */}
      <div className='pt-24 pb-40 px-16 flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x'>
        <img className='h-96 object-contain' src={brochure1} alt="Brochure 1" />
        <img className='h-96 object-contain' src={brochure2} alt="Brochure 2" />
        <img className='h-96 object-contain' src={brochure3} alt="Brochure 3" />
      </div>


      {/* HeadPhone Details Section */}
      <div className='flex-col items-center text-center px-12  pr-5'>
        <div>
          <p className='text-5xl text-primary font-semibold'>Every Detail Matters</p>
          <p className='text-xl py-8 text-secondary'>From the stitch to the signal, precision lives here.</p>
        </div>
        <div className="flex gap-4 pb-32 pt-8 overflow-x-auto hide-scrollbar scroll-smooth snap-x">
          {detailsData.map((detail) => (
            <img
              key={detail.id}
              className="w-1/4 flex-shrink-0 object-cover snap-start"
              src={detail.image}
              alt={detail.alt}
            />
          ))}
        </div>
      </div>


      {/* Feature Section */}
      <div>
        <img src={featureImage} alt="Feature" />
      </div>



      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Home;