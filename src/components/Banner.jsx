import React from 'react'
import bannerPrincipal from './assets/hamburguesa-banner.png'
const Banner = () => {
  return (
    <div className='max-h-[1640px] mx-auto p-4'>
    <div className='max-h-[500px] relative'>
        {/* Overlay*/}

        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' >La <span className='text-orange-500'>Mejor</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Comida</span> a Domicilio</h1>
        </div>

        <img className='w-full max-h-[500px] object-cover' src={bannerPrincipal} alt="/" />

    </div>

</div>
  )
}

export default Banner