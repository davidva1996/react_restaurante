import React from 'react'

import italiano from './assets/restaurante-italiano.avif'
import carne from './assets/restaurante-carne.avif'
import reposteria from './assets/reposteria.avif'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
    {/* Card */}
    <div className='rounded-xl relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Restaurante italiano</p>
        <p className='px-2'>Disponible desde 8/26</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Ordenar </button>
      </div>
      <img
      className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src={italiano}
        alt='/'
      />
    </div>
    {/* Card */}
    <div className='rounded-xl relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Restaurante de carne de res</p>
        <p className='px-2'>Disponible</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Ordenar</button>
      </div>
      <img
      className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
      src={carne}
        alt='/'
      />
    </div>
    {/* Card */}
    <div className='rounded-xl relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Reposteria</p>
        <p className='px-2'>Disponible</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Ordenar</button>
      </div>
      <img
      className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
      src={reposteria}
        alt='/'
      />
    </div>
  </div>
  )
}

export default HeadlineCards