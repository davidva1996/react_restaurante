import React from 'react'
import bannerPrincipal from './assets/hamburguesa-banner.png'

const Banner = () => {
  const scrollToFood = () => {
    document.getElementById('food-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='max-h-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            La <span className='text-orange-500'>Mejor</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span className='text-orange-500'>Comida</span> a Domicilio
          </h1>
          <p className='px-4 text-gray-300 text-base sm:text-lg mt-3 mb-6 max-w-md leading-relaxed'>
            Ordena desde los mejores restaurantes y recibe en la puerta de tu casa.
          </p>
          <div className='px-4'>
            <button
              onClick={scrollToFood}
              className='bg-orange-500 text-white border-0 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg'
            >
              Ver Menú →
            </button>
          </div>
        </div>

        <img className='w-full max-h-[500px] object-cover' src={bannerPrincipal} alt='/' />
      </div>
    </div>
  )
}

export default Banner
